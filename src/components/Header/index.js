import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

import Popup from 'reactjs-popup'

/* 
<Link to="/" className="LinkElement">
            <div className="iconsContainer">
              <IoMdHome className="icons" />
              <h1>Home</h1>
            </div>
          </Link>
          <Link to="/about" className="LinkElement">
            <div className="iconsContainer">
              <BsInfoCircleFill className="icons" />
              <h1>About</h1>
            </div>
          </Link>
          */

class Header extends Component {
  state = {menuBar: true}

  menuClicked = () => {
    console.log('hi')
    this.setState(prevState => ({menuBar: !prevState.menuBar}))
  }

  aboutButton = () => {
    const {history} = this.props
    history.replace('/about')
  }

  /* 
  modal
          trigger={
            <button className="button" onClick={this.menuClicked}>
              {icon}
            </button>
          }
          position="bottom left"
          className="popup-content"
        >
          {close => (
            <>
              <div>
                <Link to="/" className="LinkElement">
                  <div className="iconsContainer">
                    <AiFillHome className="icons" />
                    <h1>Home</h1>
                  </div>
                </Link>
                <Link to="/about" className="LinkElement">
                  <div className="iconsContainer">
                    <BsInfoCircleFill className="icons" />
                    <h1>About</h1>
                  </div>
                </Link>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </>
          )}
          */

  render() {
    const {menuBar} = this.state
    const overlayStyles = {
      backgroundColor: '#ffff',
    }

    const icon = menuBar ? (
      <GiHamburgerMenu className="menu" />
    ) : (
      <IoMdClose className="menu" />
    )

    return (
      <nav className="navBar">
        <Link to="/" className="LinkElement">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="websiteLogo"
          />
        </Link>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button
                className="button"
                onClick={this.menuClicked}
                data-testid="hamburgerIconButton"
              >
                {icon}
              </button>
            }
            overlayStyle={overlayStyles}
            position="bottom left"
            className="popup-content"
          >
            {close => (
              <>
                <div className="menuClicked">
                  <button
                    type="button"
                    className="closeIconContainer"
                    onClick={() => close()}
                    data-testid="closeButton"
                  >
                    .<IoMdClose className="menu" />
                  </button>
                  <ul className="unordered">
                    <Link to="/" className="LinkElement">
                      <li className="iconsContainer">
                        <AiFillHome className="icons" onClick={() => close()} />
                        <h1>Home</h1>
                      </li>
                    </Link>
                    <Link to="/about" className="LinkElement">
                      <li className="iconsContainer">
                        <BsInfoCircleFill
                          className="icons"
                          onClick={this.aboutButton}
                        />
                        <h1>About</h1>
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            )}
          </Popup>
        </div>
      </nav>
    )
  }
}
export default withRouter(Header)
