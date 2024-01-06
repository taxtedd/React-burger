import React from 'react';
import styles from './App.module.css';
import AppHeader from '../appHeader/AppHeader';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor';

function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    ingredients: []
  });
  
  function getIngredients() {
    setState({ ...state, hasError: false, isLoading: true });
    fetch(url)
      .then(res => res.json())
      .then(data => setState({ ...state, ingredients: data, isLoading: false }))
      .catch(err => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  };

  React.useEffect(() => {
    getIngredients();
  }, [])

  const { isLoading, hasError, ingredients} = state;

  return (
    <>
      <AppHeader/>
      {hasError === false && ingredients.success ?
        <main className={styles.main}>
          <BurgerIngredients ingredients={ingredients.data}/>
          <BurgerConstructor ingredients={ingredients.data}/>
        </main>
      : 
        <p className='mt-5 text text_type_main-default'>Ошибка получения данных с сервера</p>
      }
    </>
  );
}

export default App;