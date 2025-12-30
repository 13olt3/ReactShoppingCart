import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import CartCard from "./cartCard";

const shortenString = (input) => {
  let shortString = input.substring(0, 25);
  return shortString.concat("...");
};

const Cart = () => {
  const { shopData, cart } = useOutletContext();
  if (!shopData) return <div>Loading items...</div>;
  const productLookup = Object.fromEntries(
    shopData.map((eachData) => [eachData.id, eachData])
  );
  const cartNotEmpty = cart.length > 0;

  return (
    <>
      <div className={styles.cart}>
        {cartNotEmpty ? (
          <div className={styles.cartTitle}>
            There are {cart.length} items in cart.
          </div>
        ) : (
          <div className={styles.cartTitle}>Cart is Empty</div>
        )}
        <div className={styles.cartTiles}>
          {cartNotEmpty
            ? cart.map((cartItem) => {
                return (
                  <CartCard
                    key={productLookup[cartItem.id].id}
                    cardName={productLookup[cartItem.id].title}
                    cardQuant={cartItem.quant}
                    cardImg={productLookup[cartItem.id].image}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
//productLookup[cartItem.id].title
export default Cart;
