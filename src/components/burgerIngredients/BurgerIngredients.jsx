import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css';
import BurgerIngredient from '../burgerIngredient/BurgerIngredient';
import Modal from '../modal/Modal';
import IngredientDetails from '../ingredientDetails/IngredientDetails';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({});

  function handleOpenModal(item) {
    setSelectedItem({
      name: item.name,
      image: item.image_large,
      calories: item.calories,
      proteins: item.proteins,
      fat: item.fat,
      carbohydrates: item.carbohydrates,
    });
    setIsModalOpened(true);
  }

  function  handleCloseModal() {
    setIsModalOpened(false);
  }

  const [current, setCurrent] = React.useState('булки');

  return (
    <div className={styles.burgerIngredients}>
      <h1 className='mt-10 text text_type_main-large'>Соберите бургер</h1>
      <div className='mt-5' style={{ display: 'flex' }}>
        <Tab value="булки" active={current === 'булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="соусы" active={current === 'соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="начинки" active={current === 'начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <ul className={styles.ingredientsList}>
        <li>
          <BurgerIngredient sectionName='Булки' ingredients={props.ingredients.filter(element => element.type === 'bun')} openModal={handleOpenModal}/>
        </li>
        <li>
          <BurgerIngredient sectionName='Соусы' ingredients={props.ingredients.filter(element => element.type === 'sauce')} openModal={handleOpenModal}/>
        </li>
        <li>
          <BurgerIngredient sectionName='Начинки' ingredients={props.ingredients.filter(element => element.type === 'main')} openModal={handleOpenModal}/>
        </li>
      </ul>
      {isModalOpened === true &&
        <Modal onClose={handleCloseModal}>
          <IngredientDetails ingredient={selectedItem}/>
        </Modal>
      }
    </div>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired
}; 

export default BurgerIngredients;