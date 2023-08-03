import React from "react";

import styles from "./InfoSection.module.scss";

const InfoSection = () => {
  return (
    <div className={styles.InfoSection}>
      <div className={styles.InfoSection__Image}></div>
      <div className={styles.InfoSection__Description}>
        <div>
          <p>+20</p>
          <p>Destinazioni</p>
        </div>

        <div>
          <p>+15</p>
          <p>Imbarcazioni</p>
        </div>

        <div>
          <p>+40</p>
          <p>Itinerari</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
