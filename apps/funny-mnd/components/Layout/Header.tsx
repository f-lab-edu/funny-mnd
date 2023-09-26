import Typography from "ui/Typography";
import { typographyStyle } from "ui/styles/typography.css";
import { headerStyle } from "@/styles/components/layout.css";
import useRoute from "@/hooks/useRoute";

const Header: React.FC = () => {
  const { goHome } = useRoute();

  return (
    <header className={headerStyle}>
      <button onClick={goHome} type="button">
        <Typography as="h1" className={typographyStyle.xlarge700}>
          국락부
        </Typography>
      </button>
    </header>
  );
};

export default Header;
