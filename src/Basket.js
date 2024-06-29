import './Basket.css';
import { useContext } from 'react';
import { useStateContext } from "./useStateContext";


export default function  Basket() {

    const {
        basket,
        setBasket
          } = useContext(useStateContext);

          const deleteFromBasket = (id) =>{
            let index = basket.findIndex(element=> element.id === id)   
                setBasket(a=>[
                    ...a.slice(0,index),
                    ...a.slice(index+1,a.length)
                  ])

        
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
         <button  className='ElementButton' onClick={()=>{deleteFromBasket(element.id)}}> Удалить </button>
     </li>

)
})
}
</ul>
</>

  );
}

