import { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const handleClickMenuButton = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar
        isActiveNav={isMenuOpen}
        onClickMenuButtonNav={handleClickMenuButton}
      />
      <Menu isActive={isMenuOpen} />
    </>
  );
};

export default MenuHeader;
