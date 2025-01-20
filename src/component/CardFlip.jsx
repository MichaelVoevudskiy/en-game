import styles from './CardFlip.module.css'
import Frontcard from './../CardImg/Front.png'

const CardFlip = (props) => {

  const handleClick = () => {

   
    if (props.status === false) {
      // Копируем список и обновляем статус карточки
      const card = [...props.list];

      if(props.clickCount === 1){
        setTimeout(() => {
          props.deactivateAllAnimals(); // Деактивируем все карточки
          props.setClickCount(0); // Сбрасываем счетчик кликов
          props.SelectedItems(null);  // Сбрасываем выбранные карточки
        }, 500); 
      }
      
      if (card[props.index]) {
        card[props.index] = { ...card[props.index], status: !props.status}; // Используем новое состояние для обновления
        props.setList(card); // Передаем обновленный список
      }
      
      else {
        console.error(`Card with index ${props.index} does not exist.`);
      }
      
      props.setClickCount(props.clickCount + 1); // Увеличиваем счетчик кликов
      props.SelectedItems(props.id) // Передаем id выбранной карточки
    }
  }

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <div className={`${styles.card} ${props.status || props.found? styles.flipped : ''}`}>
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