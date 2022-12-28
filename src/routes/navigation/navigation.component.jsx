import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation-bar">
        <Link to="/" className="navigation-bar__logo-container">
          <Logo className="navigation-bar__logo" />
        </Link>
        <div className="navigation-bar__links">
          <Link to="/shop" className="navigation-bar__nav-link">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
