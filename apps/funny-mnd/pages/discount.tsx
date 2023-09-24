import type { NextPage } from "next";
import { SelectBox, Typography } from "ui/components";
import { useState } from "react";
import { discountInfoData } from "@/services/mnd.api";
import type { Discount } from "@/types/index.type";
import { discountWrapperStyle } from "@/styles/components/discount.css";

interface DiscountProps {
  discountList: Discount[];
  locationList: string[];
}

const DiscountPage: NextPage<DiscountProps> = ({
  discountList,
  locationList,
}) => {
  const [location, setLocation] = useState(locationList[0]);

  return (
    <main>
      <SelectBox
        items={locationList}
        onClick={(newLocation) => {
          setLocation(newLocation);
        }}
        value={location}
      />

      <div className="space-y-1">
        {discountList.map((discount) => {
          return <DiscountRow discount={discount} key={discount.instltnnm} />;
        })}
      </div>
    </main>
  );
};

export default DiscountPage;

export async function getStaticProps() {
  try {
    const discountList = await discountInfoData();

    const locationList = discountList
      .reduce((arr, discount) => {
        if (Array.isArray(arr) && !arr.includes(discount.rgn)) {
          return [...arr, discount.rgn];
        }
        return arr;
      }, [] as string[])
      .sort();

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

const DiscountRow: React.FC<DiscountRowProps> = ({ discount }) => {
  return (
    <div className={discountWrapperStyle}>
      <Typography as="p">{discount.instltnnm}</Typography>
      <a href={discount.hmpg} rel="noopener" target="_blank">
        {discount.hmpg}
      </a>
      <Typography as="p">{discount.rgn}</Typography>
      <Typography as="p">{discount.dcntenatvnm}</Typography>
    </div>
  );
};
