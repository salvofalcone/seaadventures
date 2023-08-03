import React from "react";

import Card from "../Card";

import { travelsData } from "@/mock/travelsData";

import styles from "./CardList.module.scss";

const CardList = () => {
  const travelsDataSection = travelsData.slice(0, 16);

  return (
    <div className={styles.CardList}>
      {travelsDataSection.map((el) => (
        <Card travelInfo={el} key={el.id} />
      ))}
    </div>
  );
};

export default CardList;
