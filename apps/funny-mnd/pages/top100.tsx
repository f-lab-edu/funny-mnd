import type { NextPage } from "next";
import type { Product } from "@/types/index.type";
import { ProductRowStyle } from "@/styles/components/product.css";
import { pxPopularProductsInfoData } from "@/services/mnd.api";

interface Top100PageProps {
  productList: Product[];
}

const Top100Page: NextPage<Top100PageProps> = ({ productList }) => {
  return (
    <main>
      <div>
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
    const pxItemTop100Rows = await pxPopularProductsInfoData();

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

const ProductRow: React.FC<ProductRowParam> = ({ index, product }) => {
  return (
    <div className={`${ProductRowStyle}`}>
      <div
        style={{
          width: "40px",
        }}
      >
        {index + 1}
      </div>
      <div>{product.prdtnm}</div>
    </div>
  );
};
