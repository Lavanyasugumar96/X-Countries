import React from "react";
import styles from "./card.module.css"
const Card = ({flag, name}) =>{
    return (
        <div className={styles.card}>
          <img
            src={flag}  
            alt= {`Flag of ${name}`}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{name}</h3>  
          </div>
        </div>
      );
    };


export default Card;