import React, { useState } from "react";

import Card from "../Card";

import styles from "./CardList.module.scss";

const CardList = ({pippo}) => {
  return (
    <div className={styles.CardList}>
      <div className={styles.CardList__Container}>
        {pippo.map((el) => (
          <Card travelInfo={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
