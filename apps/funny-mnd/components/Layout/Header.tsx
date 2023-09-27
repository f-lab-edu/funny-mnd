import { typographyStyle } from "ui/styles/typography.css";
import { Typography } from "ui/components";
import { useRouter } from "next/router";
import { headerStyle } from "@/styles/components/layout.css";
import { PATH } from "@/constants/page";

const Header: React.FC = () => {
  const router = useRouter();
  const handleClickGoHome = () => router.push(PATH.HOME);

  return (
    <header className={headerStyle}>
      <button onClick={handleClickGoHome} type="button">
        <Typography as="h1" className={typographyStyle.xlarge700}>
          국락부
        </Typography>
      </button>
    </header>
  );
};

export default Header;
