import { headerStyle } from "@/styles/components/layout.css";
import useRoute from "@/hooks/useRoute";
import { typographyStyle } from "@/styles/components/typography.css";
import Typography from "@/components/Typography";

const Header: React.FC = () => {
  const { goHome } = useRoute();

  return (
    <header className={headerStyle}>
      <button onClick={goHome} type="button">
        <Typography as="p" className={typographyStyle.xlarge900}>
          국락부
        </Typography>
      </button>
    </header>
  );
};

export default Header;
