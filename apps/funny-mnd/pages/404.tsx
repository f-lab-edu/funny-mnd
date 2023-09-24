import type { NextPage } from "next";
import { Button, Typography } from "ui/components";
import { titleBoxStyle } from "@/styles/components/layout.css";
import useRoute from "@/hooks/useRoute";

const HomePage: NextPage = () => {
  const { goHome: handleClickGoHome } = useRoute();

  return (
    <main>
      <header className={titleBoxStyle}>
        <Typography as="p" theme="large700 textCenter">
          Not Found
        </Typography>
      </header>
      <div className="space-y-2">
        <Button onClick={handleClickGoHome} theme="widthFull primary">
          Come Back Home
        </Button>
      </div>
    </main>
  );
};
export default HomePage;
