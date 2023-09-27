import type { NextPage } from "next";
import type { Product } from "@/types/index.type";
import {
  ProductIndexStyle,
  ProductNameStyle,
  ProductRowStyle,
} from "@/styles/components/product.css";
import { fetchPxPopularProductsInfoData } from "@/services/mnd.api";

interface Top100PageProps {
  productList: Product[];
}

const Top100Page: NextPage<Top100PageProps> = ({ productList }) => {
  return (
    <main>
      <div className="space-y-1">
        {productList.map((row, index) => {
          return <ProductRow index={index} key={row.prdtnm} product={row} />;
        })}
      </div>
    </main>
  );
};

export default Top100Page;

export async function getStaticProps() {
  try {
    const pxItemTop100Rows = await fetchPxPopularProductsInfoData();

    const uniqueProducts: Product[] = pxItemTop100Rows.reduce(
      (acc: Product[], current: Product) => {
        if (!acc.some((product) => product.prdtnm === current.prdtnm)) {
          acc.push(current);
        }
        return acc;
      },
      []
    );

    return {
      props: {
        productList: uniqueProducts.slice(0, 100),
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

interface ProductRowParam {
  index: number;
  product: Product;
}

const ProductRow: React.FC<ProductRowParam> = ({
  index,
  product: { prdtnm },
}) => {
  return (
    <div className={`${ProductRowStyle}`}>
      <div className={ProductIndexStyle}>{index + 1}</div>
      <div className={ProductNameStyle}>{prdtnm}</div>
    </div>
  );
};
