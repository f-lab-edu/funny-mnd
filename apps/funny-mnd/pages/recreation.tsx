import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { SelectBox, Typography } from "ui/components";
import { fetchRecreationInfoData } from "@/services/mnd.api";
import type { Recreation } from "@/types/index.type";
import getLocationList from "@/utils/getLocationList";
import { RowLabel, RowWrapper } from "@/components/Row";

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
      <SelectBox items={locationList} onClick={setLocation} value={location} />
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
    const recreationList = await fetchRecreationInfoData();

    const uniqueRecreationList = recreationList.reduce(
      (arr: Recreation[], current) => {
        if (
          !arr.some(
            (recreation) => recreation.instltn_nm === current.instltn_nm
          )
        ) {
          return [...arr, current];
        }
        return arr;
      },
      []
    );

    const locationList = getLocationList(
      uniqueRecreationList.map(
        (recreation) => recreation.pstn_addr.split(" ")[0]
      )
    );

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

const RecreationRow: React.FC<RecreationRowProps> = ({
  recreation: {
    instltn_nm: name,
    hmpg_addr: homePageAddress,
    pstn_addr: positionAddress,
    sbsfcl,
  },
}) => {
  return (
    <RowWrapper>
      <Typography as="h3">{name}</Typography>
      <div className="space-y-2">
        <a href={homePageAddress} rel="noopener" target="_blank">
          {homePageAddress}
        </a>
        <div>
          <Typography as="p">
            <RowLabel>위치</RowLabel>: {positionAddress}
          </Typography>
          <Typography as="p">
            <RowLabel>시설</RowLabel>: {sbsfcl}
          </Typography>
        </div>
      </div>
    </RowWrapper>
  );
};
