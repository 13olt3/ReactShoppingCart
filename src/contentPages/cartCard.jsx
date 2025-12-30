import styles from "./InventoryCard.module.css";

const CartCard = ({ cardName, cardQuant, cardImg }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImg}
        style={{ backgroundImage: `url(${cardImg})` }}
      ></div>
      <div>Quantity: {cardQuant}</div>
      <div className={styles.cardTitle}>{cardName}</div>
    </div>
  );
};

export default CartCard;
