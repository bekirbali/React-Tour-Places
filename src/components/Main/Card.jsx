import styles from "./Card.module.scss";
import { useState } from "react";

const Card = (props) => {
  const [over, setOver] = useState(false);
  const infoData = [];
  {
    for (const values of Object.values(props)) {
      infoData.push(values);
    }
  }

  const descriptionHandler = () => {
    setOver(over ? false : true);
    console.log(over);
  };

  return (
    <>
      {infoData.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div
            key={id}
            className={`${styles.card} `}
            onMouseOver={descriptionHandler}
          >
            <div className={styles.image}>
              <img src={image} alt="" />
              <div className={styles.description}>
                <p>{desc}</p>
              </div>
            </div>
            <h2>{title}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Card;
