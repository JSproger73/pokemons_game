import { useState } from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickMenuButton = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickMenuButtonNav={handleClickMenuButton}
      />
      <Menu isOpen={isOpen} onClickMenuButtonNav={handleClickMenuButton} />
    </>
  );
};

export default MenuHeader;
