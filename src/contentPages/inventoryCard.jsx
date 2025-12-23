import styles from "./InventoryCard.module.css";
import { useState } from "react";
const InventoryCard = ({ itemName, itemImg, cart, addToCart, itemId }) => {
  const [quant, setQuant] = useState(0);

  const handleQuantUp = () => {
    let oldQuant = quant;
    setQuant(oldQuant + 1);
  };
  const handleQuantDown = () => {
    let oldQuant = quant;
    setQuant(oldQuant - 1);
  };

  const isInCart = cart.some((cartItem) => cartItem.id === itemId);

  const cartUpdate = (itemId, quant) => {
    addToCart({ id: itemId, quant: quant });
  };

  return (
    <>
      <div className={styles.card}>
        {" "}
        <div
          className={styles.cardImg}
          style={{ backgroundImage: `url(${itemImg})` }}
        ></div>
        <div className={styles.cardTitle}>{itemName}</div>
        {isInCart && <div>item in cart</div>}
        <div className={styles.cardQuantity}>
          <button
            className={styles.quantityDown}
            onClick={() => handleQuantDown()}
            disabled={quant === 0 ? true : false}
          >
            {`<`}{" "}
          </button>

          <div className={styles.quant}>Quantity: {quant}</div>
          <button
            className={styles.quantityUp}
            onClick={() => handleQuantUp()}
          >{`>`}</button>
        </div>
        <div>
          <button onClick={() => cartUpdate(itemId, quant)}>Add to cart</button>
          {isInCart && <button>Remove Item</button>}
        </div>
      </div>
    </>
  );
};

export default InventoryCard;
