import { useState } from "react";
import "./App.css";
import ChooseTrainer from "./Components/ChooseTrainer";
import MainPage from "./Components/MainPage";
import RememberTrainer from "./Components/RememberTrainer/RememberTrainer";

function App() {
  const handleChangePage = (pageName) => {
    setPage((currentPage) => (currentPage = `${pageName}`));
  };

  const [page, setPage] = useState(<MainPage changePage={handleChangePage} />);
  switch (page) {
    case "learn":
      setPage(
        (currentPage) =>
          (currentPage = <ChooseTrainer changePage={handleChangePage} />)
      );
      break;
    case "read":
      console.log("read");
      break;
    case "vocabulary":
      console.log("vocabulary");
      break;
    case "rememberOrNot":
      setPage((currentPage) => (currentPage = <RememberTrainer page={page} />));
      break;
  }

  return <>{page}</>;
}

export default App;
