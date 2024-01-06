import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import Modal from '../modal/Modal';
import { Button, ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor(props) {
  const minPrice = 400;
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  function handleOpenModal() {
    setIsModalOpened(true);
  }

  function  handleCloseModal() {
    setIsModalOpened(false);
  }

  function ingredient(item) {
    return (
      <div className={styles.listItem}>
        <DragIcon type="primary"/>
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </div>
    );
  }

  let price = 0;
  const list = props.ingredients.map((item, index) => {
    if (index !== 0) {
      price += item.price
      return ingredient(item)
    } else {
      return null;
    }
  });

  return (
    <div className={styles.main}>
      <div className={'mt-25 pl-4 pr-4 ' + styles.burgerConstructor}>
        <div className={styles.fixedListItem}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={props.ingredients[0].image}
          />
        </div>
        
        {list}

        <div className={styles.fixedListItem}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={props.ingredients[0].image}
          />
        </div>
      </div>
      <div className={'mt-10 ' + styles.total}>
        <div className={'text text_type_digits-medium ' + styles.price}>
          {minPrice + price}
          <CurrencyIcon type='primary'/>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
      </div>
      {isModalOpened === true &&
        <Modal onClose={handleCloseModal} modalType={'orderDetails'}/>
      }
    </div>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.array.isRequired
}; 

export default BurgerConstructor;