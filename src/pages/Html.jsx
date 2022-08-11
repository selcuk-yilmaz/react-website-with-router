import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Html = () => {
  const location = useLocation();
  const htmlInfo = location.state;
  console.log(htmlInfo);
  return (
    <div className="pages-height py-5">
      <Card {...htmlInfo} />
    </div>
  );
};

export default Html;
