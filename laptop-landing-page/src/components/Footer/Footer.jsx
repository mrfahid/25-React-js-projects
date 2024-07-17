import Container from "../Container/Container"
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <div className="content">
          <div className="social-icons">
          <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-vk"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="right">
        <h1 className="logo">acer</h1>
            <p className="secondary-text">
              Federally registered <br />
              trademarks of Ziff Davis, LLC
            </p>
            <br />
            <p className="secondary-text">
              Much more is coming &nbsp;&nbsp;© 1996-2024 Acer inc, LLC. PCMag
              Digital Group
            </p>
        </div>
      </Container>
    </section>
  )
}

export default Footer