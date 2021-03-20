import cn from "classnames";
import { Link } from "react-router-dom";

import style from "./style.module.css";

const MENU = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "GAME",
    to: "/game",
  },
  {
    title: "ABOUT",
    to: "/about",
  },
  {
    title: "CONTACT",
    to: "/contact",
  },
];

const Menu = ({ isOpen, onClickMenuButtonNav }) => {
  return (
    <div
      className={cn(style.menuContainer, {
        [style.active]: isOpen === true,
        [style.deactive]: isOpen === false,
      })}
    >
      <div className={cn(style.overlay)} />
      <div className={cn(style.menuItems)}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={onClickMenuButtonNav}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
