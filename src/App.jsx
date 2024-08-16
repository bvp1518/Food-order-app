// import { useEffect } from "react";

import Header from "./component/Header";
import Meals from "./component/Meals";
import { CartContextProvider } from "./store/CartContext";


function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/meals")
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  return (
    <CartContextProvider>
     <Header />
     <Meals />
       </CartContextProvider>
  );
}

export default App;
