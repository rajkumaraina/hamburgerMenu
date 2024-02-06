import './index.css'

import Header from '../Header'

const About = () => (
  <div className="homeContainer">
    <Header />
    <div className="home">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="mainImg"
      />
    </div>
  </div>
)

export default About
