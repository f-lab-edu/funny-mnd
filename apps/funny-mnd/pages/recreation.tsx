import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { SelectBox, Typography } from "ui/components";
import { recreationInfoData } from "@/services/mnd.api";
import type { Recreation } from "@/types/index.type";
import { recreationWrapperStyle } from "@/styles/components/recreation.css";

interface RecreationPageProps {
  locationList: string[];
  recreationList: Recreation[];
}

const RecreationPage: NextPage<RecreationPageProps> = ({
  recreationList,
  locationList,
}) => {
  const [location, setLocation] = useState(locationList[0]);
  const refineRecreationList = useMemo(() => {
    if (location === "전국") {
      return recreationList;
    }
    return recreationList.filter(({ pstn_addr: addr }) =>
      addr.includes(location)
    );
  }, [recreationList, location]);

  return (
    <main className="space-y-2">
      <SelectBox
        items={locationList}
        onClick={(newLocation) => {
          setLocation(newLocation);
        }}
        value={location}
      />
      <div className="space-y-1">
        {refineRecreationList.map((recreation) => {
          return (
            <RecreationRow key={recreation.cntadr} recreation={recreation} />
          );
        })}
      </div>
      <div />
    </main>
  );
};

export default RecreationPage;

export async function getStaticProps() {
  try {
    const recreationList = await recreationInfoData();

    const uniqueRecreationList = recreationList.reduce((arr, current) => {
      if (
        !arr.some((recreation) => recreation.instltn_nm === current.instltn_nm)
      ) {
        return [...arr, current];
      }
      return arr;
    }, [] as Recreation[]);

    const locationList = recreationList
      .reduce((arr, recreation) => {
        const loc = recreation.pstn_addr.split(" ")[0];
        if (Array.isArray(arr) && !arr.includes(loc)) {
          return [...arr, loc];
        }
        return arr;
      }, [] as string[])
      .sort();

    locationList.unshift("전국");

    return {
      props: {
        locationList,
        recreationList: uniqueRecreationList,
      },
      revalidate: 5000,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
    return {
      notFound: true,
    };
  }
}

interface RecreationRowProps {
  recreation: Recreation;
}

const RecreationRow: React.FC<RecreationRowProps> = ({ recreation }) => {
  return (
    <div className={recreationWrapperStyle}>
      <Typography as="h3">{recreation.instltn_nm}</Typography>
      <div className="space-y-2">
        <a href={recreation.hmpg_addr} rel="noopener" target="_blank">
          {recreation.hmpg_addr}
        </a>
        <div>
          <Typography as="p">위치: {recreation.pstn_addr}</Typography>
          <Typography as="p">시설: {recreation.sbsfcl}</Typography>
        </div>
      </div>
    </div>
  );
};
