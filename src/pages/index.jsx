import React, { useEffect, useState } from "react";

import Head from "next/head";

import Header from "@/components/Header";
import CardList from "@/components/CardList";

import InfoSection from "@/components/InfoSection";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
    fetch("https://api.npoint.io/5f5e0098ca15d9d563bb")
      .then((res) => res.json())
      .then((data) => setTravelsData(data));
  }, []);

  const [travelsData, setTravelsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(8);
  const [allPort, setAllPort] = useState(true);

  const tempData = [];
  const portsList = []; //mi sa che non la uso più

  const randomNum = Math.floor(Math.random() * (travelsData.length - 8));
  const travelsDataSection = travelsData.slice(0, currentIndex);

  const groupedTravelsData = Object.entries(
    travelsData.reduce(function (r, a) {
      r[a.departure.Port] = r[a.departure.Port] || [];
      r[a.departure.Port].push(a);
      return r;
    }, Object.create(null))
  ).map(([Port, info]) => ({ Port, info }));

  groupedTravelsData.map((port) => portsList.push(port.Port));

  for (let i = randomNum; i < randomNum + 8; i++) {
    tempData.push(travelsData[i]);
  }

  const onHandleClick = () => {
    setCurrentIndex(currentIndex + 8);
  };

  const onHandleChange = (e) => {
    setAllPort(e.target.value);
  };

  return (
    <>
      <Head>
        <title>SeaAdventures</title>
        <meta name="description" content="SeaAdventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <Header />

        <select
          value={allPort}
          onChange={onHandleChange}
          className={styles.Main__Select}>
          <option value="all">Mostra tutti</option>
          <option value="departurePort">Mostra per porto di partenza</option>
        </select>

        {allPort === "all" ? (
          <div className={styles.CardList__Main}>
            <div className={styles.CardList}>
              <div className={styles.CardList__Container}>
                <CardList data={travelsDataSection} />
              </div>
            </div>

            <button
              className={styles.CardList__Button}
              onClick={() => onHandleClick()}>
              Mostra altre
            </button>
          </div>
        ) : (
          groupedTravelsData.map((trip) => (
            <>
              <h4 className={styles.Port__Title}>{trip.Port}</h4>
              <CardList data={trip.info} />
            </>
          ))
        )}

        <InfoSection />

        {/* TODO: cambiano quando premo su "mostra altro" */}
        <div className={styles.CardList}>
          <h2 className={styles.CardList__Title}>Avventure da scoprire</h2>
          <div className={styles.CardList__Container}>
            <CardList data={tempData} />
          </div>
        </div>
      </main>
    </>
  );
}
