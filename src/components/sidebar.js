import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import "./sidebar.scss"

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        right
      >
        <h1>
          <Link to="/">Collective</Link>
        </h1>

        <Link
          onClick={() => this.closeMenu()}
          to="/"
          className="menu-item"
          activeClassName="active"
        >
          Home
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          to="/church"
          className="menu-item"
          activeClassName="active"
        >
          Church
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          to="/teachings"
          className="menu-item"
          activeClassName="active"
        >
          Teachings
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          to="/articles"
          className="menu-item"
          activeClassName="active"
        >
          Articles
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          to="/visit"
          className="menu-item"
          activeClassName="active"
        >
          Visit
        </Link>
      </Menu>
    )
  }
}

export default SideBar
