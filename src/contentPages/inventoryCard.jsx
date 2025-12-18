import styles from "./InventoryCard.module.css";
import { useState } from "react";
const InventoryCard = ({ itemName, itemImg }) => {
  const [quant, setQuant] = useState(0);

  const handleQuantChange = (e) => {
    setQuant(e.target.value);
  };
  const handleQuantUp = () => {
    let oldQuant = quant;
    setQuant(oldQuant + 1);
  };
  const handleQuantDown = () => {
    let oldQuant = quant;
    setQuant(oldQuant - 1);
  };

  return (
    <>
      <div className={styles.card}>
        {" "}
        <img className={styles.cardImg} src={itemImg}></img>
        <div className={styles.cardTitle}>{itemName}</div>
        <div className={styles.cardQuantity}>
          <button
            className={styles.quantityDown}
            onClick={() => handleQuantDown()}
            disabled={quant === 0 ? true : false}
          >
            {`<`}{" "}
          </button>
          <input
            className={styles.quantityInput}
            value={quant}
            onChange={(e) => handleQuantChange(e)}
            type="number"
            min="0"
            readOnly
          ></input>
          <button
            className={styles.quantityUp}
            onClick={() => handleQuantUp()}
          >{`>`}</button>
        </div>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default InventoryCard;
