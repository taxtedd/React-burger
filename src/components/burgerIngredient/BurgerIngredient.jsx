import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredient(props) {
  function ingredient(item) {
    return (
      <div className={styles.item} onClick={() => props.openModal(item)}>
        <img src={item.image} alt='фото ингредиента'/>   
        <div className={styles.itemPrice}>
          <p className='text text_type_digits-default'>{item.price}</p>
          <CurrencyIcon type='primary'/>
        </div>
        <p className={'text text_type_main-default ' + styles.itemName}>{item.name}</p>
      </div>
    );
  }

  const list = props.ingredients.map(item => ingredient(item));

  return (
    <>
      <section className={'mt-10 '+ styles.section}>
        <h2 className='mb-6 text text_type_main-medium'>{props.sectionName}</h2>
        <div className={'ml-4 ' + styles.list}>{list}</div>
      </section>
    </> 
  );
}

BurgerIngredient.propTypes = {
  openModal: PropTypes.func.isRequired,
  sectionName: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired
}; 

export default BurgerIngredient;