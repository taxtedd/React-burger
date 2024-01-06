import image from "../../images/graphics.svg"
import styles from './OrderDetails.module.css';

function OrderDetails() {
  return (
    <div className={styles.main}>
      <p className='mt-30 text text_type_digits-large'>034536</p>
      <p className='mt-8 mb-15 text text_type_main-medium'>идентификатор заказа</p>
      <img src={image} alt='галочка'/>
      <p className='mt-15 text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='mt-2 mb-30 text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails