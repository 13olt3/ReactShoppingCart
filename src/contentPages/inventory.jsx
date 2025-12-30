import { useOutletContext } from "react-router";
import styles from "./Inventory.module.css";
import Card from "./inventoryCard";

const shortenString = (input) => {
  let shortString = input.substring(0, 25);
  return shortString.concat("...");
};

const Inventory = () => {
  const { shopData, cart, setCart, updateCartAdd, updateCartRemove } =
    useOutletContext();
  return (
    <>
      <div className={styles.inventoryGrid}>
        {" "}
        {shopData
          ? shopData.map((inventoryItem) => (
              <Card
                key={inventoryItem.id}
                itemId={inventoryItem.id}
                itemImg={inventoryItem.image}
                itemName={shortenString(inventoryItem.title)}
                cart={cart}
                setCart={setCart}
                addToCart={updateCartAdd}
                removeFromCart={updateCartRemove}
              />
            ))
          : ""}
      </div>
    </>
  );
};

export default Inventory;
