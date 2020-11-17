import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
      if(user) {
        auth.signOut();      
    }
  }
  console.log(user);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://images.vexels.com/media/users/3/153149/isolated/preview/1dbe90ba2f24289a1668a0dbc8150e2e-gamepad-colored-stroke-icon-by-vexels.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__option1">Hello {user?.email}</span>
  <span className="header__option2">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Search</span>
            <span className="header__option2">& Navigate</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Favourites</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__link">
        <div className="header__optionbasket">
          <ShoppingBasketIcon />
          <span className="header__option2 header__basketcount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
