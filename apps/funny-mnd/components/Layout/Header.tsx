import { headerStyle } from "@/styles/components/layout.css";
import Typography from "../Typography";
import { useRouter } from "next/router";
import useRoute from "@/hooks/useRoute";
import { typographyStyle } from "@/styles/components/typography.css";

const Header: React.FC = () => {
  const { goHome } = useRoute();

  return (
    <header className={headerStyle}>
      <button onClick={goHome}>
        <Typography className={typographyStyle.xlarge900}>국락부</Typography>
      </button>
    </header>
  );
};

export default Header;
