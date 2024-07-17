import Container from "../Container/Container"
import overview from "../../assets/overview.jpeg";
import RedLine from "../RedLine/RedLine";
import FindMore from "../FindMore/FindMore";
import './Overview.css'

const Overview = () => {
  return (
    <section className="overview">
      <Container type="smallest">
        <div className="content">
          <img src={overview} alt="No image found" />
          <div className="right">
            <RedLine type="small"/>
            <h3 className="title">
              Introducing <br />
              latest acer
              <br /> nitro 5 graphics
            </h3>
            <p className="secondary-text">
              Feel the new world <br /> of gaming development
            </p>
            <FindMore text="Find out more" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Overview