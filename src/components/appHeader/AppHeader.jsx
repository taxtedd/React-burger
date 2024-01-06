import styles from './AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={'mt-4 mb-4 '+styles.content}>
          <nav className={styles.nav}>
            <div className={'pt-4 pb-4 pl-5 pr-5 '+styles.contentItem}>
              <BurgerIcon type='primary' />
              <p className='text text_type_main-default'>Конструктор</p>
            </div>
            <div className={'pt-4 pb-4 pl-5 pr-5 '+styles.contentItem}>
              <ListIcon type='secondary' />
              <p className='text text_type_main-default text_color_inactive'>Лента заказов</p>
            </div>
          </nav>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={'pt-4 pb-4 pl-5 pr-5 '+styles.contentItem}>
            <ProfileIcon type='secondary' />
            <p className='text text_type_main-default text_color_inactive'>Личный кабинет</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default AppHeader;