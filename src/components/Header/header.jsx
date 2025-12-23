const Header = ({ cart }) => {
  return (
    <>
      <div className="header">
        <p>Shopping Cart App</p>
        <div>
          There {cart.length === 1 ? "is" : "are"} {cart.length}{" "}
          {cart.length === 1 ? "item" : "items"} in the cart.
        </div>
      </div>
    </>
  );
};

export default Header;
