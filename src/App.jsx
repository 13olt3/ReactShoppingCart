import "./App.css";
import Sidebar from "./components/Sidebar/sidebar.jsx";
import Header from "./components/Header/header.jsx";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const [shopData, setShopData] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const limit = 13;
    const fetchPromises = [];

    for (let i = 1; i <= limit; i++) {
      const url = `https://fakestoreapi.com/products/${i}`;
      const promise = fetch(url).then((res) => {
        return res.json();
      });

      fetchPromises.push(promise);
    }

    Promise.all(fetchPromises).then((allProducts) => {
      console.log("All data fetched:", allProducts);
      allProducts.splice(0, 1);
      allProducts.splice(3, 1);
      allProducts.splice(6, 1);
      allProducts.splice(8, 1);

      setShopData(allProducts);
    });
  }, []);

  const updateCart = (newItem) => {
    setCart(...cart, newItem);
    // newItem has to be an item id as well as item quantity value
  };
  const contextOutlet = { shopData, cart, updateCart };

  return (
    <>
      <Header />
      <Sidebar />
      <Outlet context={contextOutlet} />
    </>
  );
}

export default App;
