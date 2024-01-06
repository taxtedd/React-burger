import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';

function IngredientDetails(props) {
  const ingredient = props.ingredient;

  return (
    <div className={'mt-10 ' + styles.main}>
      <h2 className={'pr-15 text text_type_main-large ' + styles.header}>Детали ингредиента</h2>
      <img src={ingredient.image} alt='фото ингридиента' className={styles.image}/>
      <p className='mt-4 text text_type_main-medium'>{ingredient.name}</p>
      <div className={'mt-8 ' + styles.description}>
        <div className={styles.nutrition}>
          <p className='text text_type_main-default text_color_inactive'>Калории,ккал</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.calories}</p>
        </div>
        <div className={styles.nutrition}>
          <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.proteins}</p>
        </div>
        <div className={styles.nutrition}>
          <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.fat}</p>
        </div>
        <div className={styles.nutrition}>
          <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
          <p className='text text_type_digits-default text_color_inactive'>{ingredient.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient:  PropTypes.exact({
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
  }),   
}; 

export default IngredientDetails