import './Basket.css';
import { useContext } from 'react';
import { useStateContext } from "./useStateContext";


export default function  Basket() {

    const {
        basket,
        setBasket
          } = useContext(useStateContext);

          const addToBasket = (element) =>{
            setBasket([...basket,element])
            console.log(basket)
         }      
         
         
const isNew = (item) => {
    if (item===true) return "Новинка"
    else return ""
}



  return (

<>
<div className='basket'>
            Корзина
       </div>

<ul className='List'>
{ basket && basket.length>0 && basket.map( element => {
 return (
     <li key={element.id}  className='Li'>
         <span className='Element'> {element.name} </span>
         <span className='Element'> {element.color} </span>
         <span className='Element'> {element.kind} </span>
         <span className='Element'> {element.price} р. </span>
         <span className='Element'> { isNew (element.is_new ) } </span>
     </li>

)
})
}
</ul>
</>

  );
}

