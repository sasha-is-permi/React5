
import './Catalog.css';
import { useContext } from 'react';
import { useStateContext } from "./useStateContext";




const isNew = (item) => {
    if (item===true) return "Новинка"
    else return ""
}



export default function  Catalog() {

    const {
        catalogFiltred,
        basket,
        setBasket
          } = useContext(useStateContext);

  const addToBasket = (element) =>{
     setBasket([...basket,element])
     console.log(basket)
  }        

  return (
       <>
       <ul className='List'>
      { catalogFiltred && catalogFiltred.length>0 && catalogFiltred.map( element => {
        return (
            <li key={element.id}  className='Li'>
                <span className='Element'> {element.name} </span>
                <span className='Element'> {element.color} </span>
                <span className='Element'> {element.kind} </span>
                <span className='Element'> {element.price} р. </span>
                <span className='Element'> { isNew (element.is_new ) } </span>
                <button  className='ElementButton' onClick={()=>{addToBasket(element)}}> В корзину </button>
            </li>
       
    )
})
}
       </ul>
       </>

  );
}

