import "./Home.css";
import html from "../assets/logo_html.png";
import css from "../assets/logo_css.png";
import brush from "../assets/logo_brush.png";
import Subscribe from "../components/Subscribe";
import { useNavigate } from "react-router-dom";
import { info } from "../utils/data";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className="banner">
          <p id="name">Professional Web Design</p>
          <p id="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </section>
        <Subscribe />
        //!ikinci yol olarak componentsiz yapılabilir.
        {/* <section className="subscribe">
          <div id="newsletter">
            <p>Subscribe To Our Newsletter</p>
          </div>
          <div>
            <form action="#">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email..."
              />
              <button type="submit" id="submit">
                Subscribe
              </button>
            </form>
          </div>
        </section> */}
        <section className="logo">
          <div
            className="box"
            onClick={() => navigate("/html", { state: info[0].htmlInfo })}
          >
            <img src={html} alt="html_logo" />
            <h3>HTML5 Markup</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies
            </p>
          </div>
          <div
            className="box"
            onClick={() => navigate("/css", { state: info[1].cssInfo })}
          >
            <img src={css} alt="css_logo" />
            <h3>CSS3 Styling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies
            </p>
          </div>
          <div
            className="box"
            onClick={() => navigate("/logo", { state: info[2].logoInfo })}
          >
            <img src={brush} alt="graphic_logo" />
            <h3>Graphic Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
