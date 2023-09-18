import Typography from "ui/Typography";
import Button from "ui/button";
import { titleBoxStyle } from "@/styles/components/layout.css";

export default function Home() {
  return (
    <main>
      <header className={titleBoxStyle}>
        <Typography
          as="p"
          style={{
            paddingTop: 20,
            paddingBottom: 20,
          }}
          theme="large700 textCenter"
        >
          국군의 혜택이 한 눈에!
        </Typography>
      </header>
      <div className="space-y-2">
        <Button theme="widthFull primary">PX 인기 TOP 100</Button>
        <Button theme="widthFull primary">병사 할인 혜택 정보</Button>
        <Button theme="widthFull primary">군 휴양시설 정보 목록</Button>
        <Button theme="widthFull primary">군병원 정보</Button>
        <Button theme="widthFull primary">예비군 훈련장 정보</Button>
      </div>
    </main>
  );
}
