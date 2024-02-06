import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="homeContainer">
    <Header />
    <div className="home">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="mainImg"
      />
    </div>
  </div>
)

export default Home
