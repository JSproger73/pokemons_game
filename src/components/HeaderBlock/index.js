import cn from "classnames";
import { useHistory } from "react-router-dom";

import style from "./style.module.css";

function Headerblock({ title, descr, onClickButton }) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/game");
  };

  return (
    <header className={cn(style.root)}>
      <div className={cn(style.forest)}>
        <div className={cn(style.silhouette)}></div>
        <div className={cn(style.moon)}></div>
      </div>
      <div className={cn(style.container)}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>Start game</button>
      </div>
    </header>
  );
}

export default Headerblock;
