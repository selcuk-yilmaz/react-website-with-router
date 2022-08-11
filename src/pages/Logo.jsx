import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();
  const logoInfo = location.state;

  return (
    <div className="pages-height py-5">
      <Card {...logoInfo} />
    </div>
  );
};

export default Logo;
