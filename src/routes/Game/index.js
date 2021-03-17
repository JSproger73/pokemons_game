import MenuHeader from "../../components/MenuHeader";

import cn from "classnames";

import style from "../Game/style.module.css";

const GamePage = ({ onChangePage }) => {
  const handleClickButton = () => {
    onChangePage && onChangePage("app");
  };

  return (
    <div>
      <MenuHeader bgActive={true} />
      <div className={cn(style.container)}>
        <button onClick={handleClickButton} className={cn(style.buttonHome)}>
          Home page
        </button>
      </div>
    </div>
  );
};

export default GamePage;
