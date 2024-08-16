// import { useEffect } from "react";

import Header from "./component/Header";
import Meals from "./component/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./component/Cart";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/meals")
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
