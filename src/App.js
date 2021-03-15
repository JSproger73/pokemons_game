import { useState } from "react";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";

const App = () => {
  const [page, setPage] = useState("app");
  const handleChangePage = (page) => {
    setPage(page);
  };

  const handleChangePage2 = () => {
    setPage("app");
  };

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />;
    case "game":
      return <GamePage onChangePage2={handleChangePage2} />;
    default:
      return <HomePage />;
  }
};

export default App;
