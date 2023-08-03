import React, { useState } from "react";

import Card from "../Card";

import { travelsData } from "@/mock/travelsData";

import styles from "./CardList.module.scss";

const CardList = () => {
  const [currentIndex, setCurrentIndex] = useState(8);
  const travelsDataSection = travelsData.slice(0, currentIndex);

  const onHandleClick = () => {
    setCurrentIndex(currentIndex + 8);
  };

  return (
    <div className={styles.CardList}>
      <div className={styles.CardList__Container}>
        {travelsDataSection.map((el) => (
          <Card travelInfo={el} key={el.id} />
        ))}
      </div>
      <button
        className={styles.CardList__Button}
        onClick={() => onHandleClick()}>
        Mostra altre
      </button>
    </div>
  );
};

export default CardList;
