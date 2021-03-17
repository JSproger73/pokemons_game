import cn from "classnames";

import style from "./style.module.css";

const MENU = [
  {
    title: "HOME",
    to: "#welcome",
  },
  {
    title: "GAME",
    to: "#game",
  },
  {
    title: "ABOUT",
    to: "#about",
  },
  {
    title: "CONTACT",
    to: "#contact",
  },
];

const Menu = ({ isOpen }) => {
  return (
    <div
      className={cn(style.menuContainer, {
        [style.active]: isOpen === true,
        [style.deactive]: isOpen === false,
      })}
    >
      <div clasNames={cn(style.overlay)} />
      <div className={cn(style.menuItems)}>
        <ul>
          {MENU.map(({ title, to }, id) => (
            <li key={id}>
              <a href={to}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
