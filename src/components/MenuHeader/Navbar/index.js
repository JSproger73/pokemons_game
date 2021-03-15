import cn from "classnames";

import style from "./style.module.css";

const Navbar = () => {
  return (
    <nav className={cn(style.root)}>
      <div className={cn(style.navWrapper)}>
        <p className={cn(style.brand)}>LOGO</p>
        <a className={cn(style.menuButton, style.active)}>
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
