import RedLine from "../RedLine/RedLine";
import assets from '../../assets/topmost.png'
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="bgImage">
        <div className="content">
          <img src={assets} alt="laptop" />
          <RedLine />
          <h4>Gaming Laptop</h4>
          <p className="secondary-text">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            adipisicing elit. Voluptatibus, fugit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
