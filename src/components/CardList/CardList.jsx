import React from "react";

import Card from "../Card";

import styles from "./CardList.module.scss";

const CardList = ({ data }) => {
  return (
    <div className={styles.CardList}>
      <div className={styles.CardList__Container}>
        {data.map((el, i) => (
          <Card travelInfo={el} key={el?.id ? el.id : i} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
