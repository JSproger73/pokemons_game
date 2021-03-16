import cn from "classnames";

import style from "./style.module.css";

const Menu = ({ isActive }) => {
  const classActiveIsDeactive = isActive ? style.active : style.deactive;
  return (
    <div className={cn(style.menuContainer, classActiveIsDeactive)}>
      <div clasNames={cn(style.overlay)} />
      <div className={cn(style.menuItems)}>
        <ul>
          <li>
            <a href="#welcome">HOME</a>
          </li>
          <li>
            <a href="#game">GAME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
