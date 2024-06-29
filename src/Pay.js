import './Pay.css';

import { useContext } from 'react';
import { useStateContext } from "./useStateContext";

export default function  Pay() {
  const {
    basket,
    setBasket
      } = useContext(useStateContext);

const send = ()=> {

  if (basket.length === 0 ) { 
    alert("Корзина пуста. Добавьте, пожалуйста, товары!")
    return;
  }

     if(navigator.onLine) {
         alert("Покупка совершена");
         setBasket([]);
      } else {
         alert("Нет сети")
      }
}

  return (
       <div className='Pay'>
         <button className='PayButton' onClick={send}>    Купить </button>
       </div>

  );
}

