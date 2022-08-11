import html from "../assets/img/logo_html.png";
import css from "../assets/img/logo_css.png";
import brush from "../assets/img/logo_brush.png";

const Home = () => {
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
        <section className="subscribe">
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
        </section>
        <section className="logo">
          <div className="box">
            <img src={html} alt="html_logo" />
            <h3>HTML5 Markup</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies
            </p>
          </div>
          <div className="box">
            <img src={css} alt="css_logo" />
            <h3>CSS3 Styling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies
            </p>
          </div>
          <div className="box">
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
