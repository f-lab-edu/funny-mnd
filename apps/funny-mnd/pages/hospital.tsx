import type { NextPage } from "next";
import { hospitalInfoData } from "@/services/mnd.api";
import type { Hospital } from "@/types/index.type";

interface HospitalPageProps {
  hospitalList: Hospital[];
}

const HospitalPage: NextPage<HospitalPageProps> = ({ hospitalList }) => {
  console.log({ hospitalList });
  return <></>;
};

export default HospitalPage;

export async function getStaticProps() {
  try {
    const hospitalList = await hospitalInfoData();

    return {
      props: {
        hospitalList,
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
