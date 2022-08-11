import cw from "../assets/cw.jpeg";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="foot">
          <p>Clarusway Web Design, Copyright © 2020</p>
          <img src={cw} alt="clarusway_logo" height={60} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
