import cn from "classnames";

import style from "./style.module.css";

const Navbar = ({ isActiveNav, onClickMenuButtonNav }) => {
  const handleClick = () => {
    onClickMenuButtonNav && onClickMenuButtonNav();
  };

  return (
    <nav className={cn(style.root)}>
      <div className={cn(style.navWrapper)}>
        <p className={cn(style.brand)}>POKEMON GAME</p>
        <a
          href="/#"
          onClick={handleClick}
          className={cn(style.menuButton, { [style.active]: isActiveNav })}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
