import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

function ModalOverlay(props) {
    return (
        <div className={styles.modalOverlay} onClick={props.closeModal}/>
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
}; 

export default ModalOverlay;