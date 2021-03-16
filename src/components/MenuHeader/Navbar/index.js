import cn from "classnames";

import style from "./style.module.css";

const Navbar = (isActive) => {
  const handleClick = () => {
    onClickNavButton && onClickNavButton(isActive);
    console.log("Navbar");
  };
  return (
    <nav className={cn(style.root)}>
      <div className={cn(style.navWrapper)}>
        <p className={cn(style.brand)}>LOGO</p>
        <a
          href="/"
          onClick={handleClick}
          className={cn(style.menuButton, { [style.active]: isActive })}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
