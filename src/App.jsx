import { useState } from "react";
import "./App.css";
import ChooseTrainer from "./Components/ChooseTrainer";
import MainPage from "./Components/MainPage";
import RememberTrainer from "./Components/RememberTrainer/RememberTrainer";
// import Test from "./Components/test/test";


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
      setPage((currentPage) => (currentPage = <RememberTrainer />));
      break;
  }

  return <>
  {/* <Test/> */}
  <RememberTrainer />
 {page}
  </>;
}

export default App;
