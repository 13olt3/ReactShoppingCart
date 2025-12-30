import styles from "./InventoryCard.module.css";
import { useState } from "react";
const InventoryCard = ({
  itemName,
  itemImg,
  cart,
  setCart,
  addToCart,
  itemId,
  removeFromCart,
}) => {
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

  const cartUpdateAdd = (itemId, quant) => {
    //if item not in cart, add to cart
    if (!cart.some((cartItem) => cartItem.id === itemId)) {
      addToCart({ id: itemId, quant: quant });
    }
    // else update the cart quant
    else {
      let updateQuant = cart.map((cartItem) => {
        if (cartItem.id === itemId) {
          return { id: itemId, quant: cartItem.quant + quant };
        } else {
          return cartItem;
        }
      });
      setCart(updateQuant);
    }
  };

  const cartUpdateRemove = (itemId) => {
    removeFromCart(itemId);
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
        {isInCart && (
          <div>
            {cart.find((cartItem) => cartItem.id === itemId).quant}{" "}
            {cart.length === 1 ? "item" : "items"}{" "}
            {cart.length === 1 ? "is" : "are"} in cart.
          </div>
        )}
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
            role="button"
          >{`>`}</button>
        </div>
        <div>
          <button
            onClick={() => cartUpdateAdd(itemId, quant)}
            disabled={quant === 0 ? true : false}
          >
            Add to cart
          </button>
          {isInCart && (
            <button onClick={() => cartUpdateRemove(itemId)}>
              Remove Item
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default InventoryCard;
