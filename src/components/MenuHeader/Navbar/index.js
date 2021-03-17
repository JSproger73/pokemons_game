import cn from "classnames";

import style from "./style.module.css";

const Navbar = ({ isOpen, bgActive, onClickMenuButtonNav }) => {
  return (
    <nav className={cn(style.navbar, { [style.bgActive]: bgActive })}>
      <div className={cn(style.navWrapper)}>
        <p className={cn(style.brand)}>POKEMON GAME</p>
        <div
          onClick={onClickMenuButtonNav}
          className={cn(style.menuButton, { [style.active]: isOpen })}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
