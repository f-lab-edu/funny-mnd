import type { NextPage } from "next";
import { SelectBox, Typography } from "ui/components";
import { useMemo, useState } from "react";
import { fetchHospitalInfoData } from "@/services/mnd.api";
import type { Hospital } from "@/types/index.type";
import getLocationList from "@/utils/getLocationList";
import { RowLabel, RowWrapper } from "@/components/Row";

interface HospitalPageProps {
  hospitalList: Hospital[];
  locationList: string[];
}

const HospitalPage: NextPage<HospitalPageProps> = ({
  hospitalList,
  locationList,
}) => {
  const [location, setLocation] = useState(locationList[0]);
  const refineHospitalList = useMemo(() => {
    if (location === "전국") {
      return hospitalList;
    }
    return hospitalList.filter(({ hspt_addr: addr }) =>
      addr.includes(location)
    );
  }, [hospitalList, location]);

  return (
    <main className="space-y-2">
      <SelectBox items={locationList} onClick={setLocation} value={location} />
      <div className="space-y-2">
        {refineHospitalList.map((hospital) => (
          <HospitalRow hospital={hospital} key={hospital.hsptnm} />
        ))}
      </div>
    </main>
  );
};

export default HospitalPage;

export async function getStaticProps() {
  try {
    const hospitalList = await fetchHospitalInfoData();

    const locationList = getLocationList(
      hospitalList.map(({ hspt_addr: addr }) => addr.split(" ")[0])
    );

    return {
      props: {
        hospitalList,
        locationList,
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

interface HospitalRowProps {
  hospital: Hospital;
}

const HospitalRow: React.FC<HospitalRowProps> = ({
  hospital: { hsptnm, hspt_addr: addr, hspt_cntadr: cntadr, zipcd },
}) => {
  return (
    <RowWrapper>
      <Typography as="h3">{hsptnm}</Typography>
      <Typography as="p">
        <RowLabel>우편번호</RowLabel>: {zipcd}
      </Typography>
      <Typography as="p">
        <RowLabel>주소</RowLabel>: {addr}
      </Typography>
      <Typography as="p">
        <RowLabel>전화번호</RowLabel>: {cntadr}
      </Typography>
    </RowWrapper>
  );
};
