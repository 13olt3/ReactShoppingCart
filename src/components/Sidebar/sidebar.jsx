import { useState } from "react";
import { Link } from "react-router";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.bottomLayer}>
        {" "}
        <Link to="contentIndex" onClick={() => console.log("clicked")}>
          ContentIndex
        </Link>
        <Link to="inventory" onClick={() => console.log("clicked")}>
          Inventory
        </Link>
        <Link to="cart" onClick={() => console.log("clicked")}>
          Cart
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
