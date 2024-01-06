import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import ModalOverlay from '../modalOverlay/ModalOverlay';
import OrderDetails from '../orderDetails/OrderDetails';
import IngredientDetails from '../ingredientDetails/IngredientDetails';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById("react-modals");

function Modal(props) {
  const {onClose, modalType, selectedItem} = props;

  function handleEscape(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  }

  React.useEffect(() => {
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
  }, []);

  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay closeModal={onClose}/>
        <div className={styles.main}>
          <button className={styles.exit} onClick={onClose}>
            <CloseIcon type="primary" />
          </button> 
          {modalType === 'orderDetails' && <OrderDetails/>}
          {modalType === 'ingredientDetails' && <IngredientDetails ingredient={selectedItem}/>}
        </div>
      </> 
    ),
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
  selectedItem: PropTypes.object.isRequired
}; 

export default Modal;