import cn from "classnames";

import style from "./style.module.css";

function Headerblock({ title, descr, onClickButton }) {
  const handleClick = () => {
    onClickButton && onClickButton("game");
  };

  return (
    <header className={cn(style.root)}>
      <div className={cn(style.forest)}></div>
      <div className={cn(style.container)}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>Start game</button>
      </div>
    </header>
  );
}

export default Headerblock;
