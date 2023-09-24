import { Typography, Button } from "ui/components";
import type { NextPage } from "next";
import { titleBoxStyle } from "@/styles/components/layout.css";
import useRoute from "@/hooks/useRoute";

const HomePage: NextPage = () => {
  const {
    goPxTop100: handleClickGoPxTop100,
    goDiscount: handleClickGoDiscount,
  } = useRoute();

  return (
    <main>
      <header className={titleBoxStyle}>
        <Typography as="p" theme="large700 textCenter">
          국군의 혜택이 한 눈에!
        </Typography>
      </header>
      <div className="space-y-2">
        <Button onClick={handleClickGoPxTop100} theme="widthFull primary">
          PX 인기 TOP 100
        </Button>
        <Button onClick={handleClickGoDiscount} theme="widthFull primary">
          병사 할인 혜택 정보
        </Button>
        <Button theme="widthFull primary">군 휴양시설 정보 목록</Button>
        <Button theme="widthFull primary">군병원 정보</Button>
        <Button theme="widthFull primary">예비군 훈련장 정보</Button>
      </div>
    </main>
  );
};
export default HomePage;
