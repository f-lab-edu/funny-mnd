import type { NextPage } from "next";
import { MND_API_KEY } from "config/key";
import type { Product, PxItemTop100Data } from "@/types/index.type";
import { ProductRowStyle } from "@/styles/components/product.css";

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
    const res = await fetch(
      `https://openapi.mnd.go.kr/${MND_API_KEY}/json/DS_MND_PX_PARD_PRDT_INFO/1/1160/`
    );
    const data: PxItemTop100Data = await res.json();

    const uniqueProducts: Product[] = data.DS_MND_PX_PARD_PRDT_INFO.row.reduce(
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
  } catch {
    return {
      notfound: true,
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
