import './Pay.css';

export default function  Pay() {

const send = ()=> {
     if(navigator.onLine) {
         alert("Покупка совершена")
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

