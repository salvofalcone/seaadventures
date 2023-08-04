import React from "react";

import RightArrow from "@/components/Icons/RightArrow";

import styles from "./Card.module.scss";

const Card = ({ travelInfo }) => {
  if (travelInfo && travelInfo.departureDate) {
    const departureInfo = travelInfo?.departureDate?.split(" ");
    const [depYear, depMonth, depDay] = departureInfo[0].split("-");
    const depDate = depDay + "/" + depMonth + "/" + depYear;
    const [depHour, depMin, depSec] = departureInfo[1].split(":");
    const depTime = depHour + ":" + depMin;

    const arrivalInfo = travelInfo?.arrivalDate?.split(" ");
    const [arrYear, arrMonth, arrDay] = arrivalInfo[0].split("-");
    const arrDate = arrDay + "/" + arrMonth + "/" + arrYear;
    const [arrHour, arrMin, arrSec] = arrivalInfo[1].split(":");
    const arrTime = arrHour + ":" + arrMin;

    return (
      <div className={styles.Card}>
        <div className={styles.Card__Top}>
          <p>
            <span className={styles.Card__Top__Price}>
              {travelInfo?.budget?.value}
              {travelInfo?.budget?.currencyCode}
            </span>{" "}
            {travelInfo?.budget?.costType}
          </p>
          <h2 className={styles.Card__Top__Title}>{travelInfo?.title}</h2>
        </div>

        <div className={styles.Card__Content}>
          <div className={styles.Card__Content__Travel}>
            <div className={styles.Card__Content__Travel__Info}>
              <div>
                <p className={styles.Card__Content__Light}>PARTENZA DA</p>
                <h3 className={styles.Card__Content__Bold}>
                  {travelInfo?.departure?.Port}
                </h3>
              </div>
              <div className={styles.Card__Content__Bold}>
                <p>{travelInfo?.boatType}</p>
                <p>{travelInfo?.numberOfDays} giorni</p>
              </div>
            </div>

            <div className={styles.Card__Content__Travel__Info}>
              <div>
                <p>{depDate}</p>
                <p className={styles.Card__Content__Light}>{depTime}</p>
              </div>
              <div>
                <RightArrow />
              </div>
              <div>
                <p>{arrDate}</p>
                <p className={styles.Card__Content__Light}>{arrTime}</p>
              </div>
            </div>
          </div>

          <div className={styles.Card__Content__Availability}>
            <p>
              {travelInfo?.reservations} {travelInfo?.reservationsType}
            </p>
            <p>
              <span className={styles.Card__Content__Light}>Disponibilità</span>{" "}
              <span className={styles.Card__Content__Bold}>
                {travelInfo?.reservationsAvailable}
              </span>
            </p>
          </div>
        </div>

        <button className={styles.Card__Button}>Prenota</button>
      </div>
    );
  }

  return (
    <div className={styles.Card}>
      <div className={styles.Card__Top}>
        <p>
          <span className={styles.Card__Top__Price}>
            {travelInfo?.budget?.value}
            {travelInfo?.budget?.currencyCode}
          </span>{" "}
          {travelInfo?.budget?.costType}
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
