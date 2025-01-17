import styles from './CardFlip.module.css'
import React, { useState, useEffect } from 'react';
import Frontcard from './../CardImg/Front.png'

const CardFlip = (props) => {

  const handleClick = () => {

    if(props.clickCount == 1){
      setTimeout(() => {
        props.deactivateAllAnimals();
        props.setClickCount(0);
      }, 500); // Задержка в 2 секунды
 
    }
    
    if (!props.status) {
      // Копируем список и обновляем статус карточки
      const card = [...props.list];
      
      if (card[props.index]) {
        card[props.index] = { ...card[props.index], status: !props.status }; // Используем новое состояние для обновления
        props.setList(card); // Передаем обновленный список
      } 
      
      else {
        console.error(`Card with index ${props.index} does not exist.`);
      }

      
      props.setClickCount(props.clickCount + 1);
      console.log(props.clickCount);
    }
  }

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <div className={`${styles.card} ${props.status ? styles.flipped : ''}`}>
        <div className={styles.cardFace + ' ' + styles.cardFront}>
          <img src={Frontcard} alt="Front" />
        </div>
        <div className={styles.cardFace + ' ' + styles.cardBack}>
          <img src={props.who} alt="Back" />
        </div>
      </div>
    </div>
  );
}

export default CardFlip;