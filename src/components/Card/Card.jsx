import React from "react";

import styles from "./Card.module.scss";

const Card = ({ travelInfo }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__Top}>
        <p>
          <span className={styles.Card__Top__Price}>
            {travelInfo?.budget?.value}
            {travelInfo?.budget?.currencyCode}
          </span>
         {" "} {travelInfo?.budget?.costType}
        </p>
        <h2 className={styles.Card__Top__Title}>{travelInfo?.title}</h2>
      </div>

      <div className={styles.Card__Content}>
        <div className={styles.Card__Content__Travel}>
          <div className={styles.Card__Content__Travel__Info}>
            <div>
              <p>PARTENZA DA</p>
              <p>{travelInfo?.departure?.Port}</p>
            </div>
            <div>
              <p>{travelInfo?.boatType}</p>
              <p>{travelInfo?.numberOfDays} giorni</p>
            </div>
          </div>

          <div className={styles.Card__Content__Travel__Info}>
            <div>
              <p>{travelInfo?.departureDate}</p>
            </div>
            {/* TODO: splittare data e ora e invertire i giorni */}
            <div>{"->"}</div>
            <div>
              <p>{travelInfo?.arrivalDate}</p>
            </div>
          </div>
        </div>

        <div className={styles.Card__Content__Availability}>
          <p>
            {travelInfo?.reservations} {travelInfo?.reservationsType}
          </p>
          <p>Disponibilità {travelInfo?.reservationsAvailable}</p>
        </div>
      </div>

      <button className={styles.Card__Button}>Prenota</button>
    </div>
  );
};

export default Card;
