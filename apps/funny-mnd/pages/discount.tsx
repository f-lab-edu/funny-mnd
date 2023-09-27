import type { NextPage } from "next";
import { SelectBox, Typography } from "ui/components";
import { useMemo, useState } from "react";
import { fetchDiscountInfoData } from "@/services/mnd.api";
import type { Discount } from "@/types/index.type";
import getLocationList from "@/utils/getLocationList";
import { RowLabel, RowWrapper } from "@/components/Row";

interface DiscountProps {
  discountList: Discount[];
  locationList: string[];
}

const DiscountPage: NextPage<DiscountProps> = ({
  discountList,
  locationList,
}) => {
  const [location, setLocation] = useState(locationList[0]);
  const refineDiscountList = useMemo(() => {
    if (location === "전국") {
      return discountList;
    }
    return discountList.filter(({ rgn }) => rgn.includes(location));
  }, [discountList, location]);

  return (
    <main className="space-y-2">
      <SelectBox items={locationList} onClick={setLocation} value={location} />

      <div className="space-y-1">
        {refineDiscountList.map((discount) => {
          return <DiscountRow discount={discount} key={discount.instltnnm} />;
        })}
      </div>
    </main>
  );
};

export default DiscountPage;

export async function getStaticProps() {
  try {
    const discountList = await fetchDiscountInfoData();

    const locationList = getLocationList(
      discountList.map((discount) => discount.rgn)
    );

    return {
      props: {
        discountList,
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

interface DiscountRowProps {
  discount: Discount;
}

const DiscountRow: React.FC<DiscountRowProps> = ({
  discount: { instltnnm, hmpg, rgn, dcntenatvnm },
}) => {
  return (
    <RowWrapper>
      <Typography as="h3">{instltnnm}</Typography>
      <div className="space-y-2">
        <a href={hmpg} rel="noopener" target="_blank">
          {hmpg}
        </a>
        <div>
          <Typography as="p">
            <RowLabel>위치</RowLabel>: {rgn}
          </Typography>
          <Typography as="p">
            <RowLabel>할인</RowLabel>: {dcntenatvnm}
          </Typography>
        </div>
      </div>
    </RowWrapper>
  );
};
