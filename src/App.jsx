// import { useEffect } from "react";

import Header from "./component/Header";
import Meals from "./component/Meals";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/meals")
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  return (
    <>
     <Header />
     <Meals />
       </>
  );
}

export default App;
