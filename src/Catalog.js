
import './Catalog.css';
import { useContext } from 'react';
import { useStateContext } from "./useStateContext";




const isNew = (item) => {
    if (item===true) return "Новинка"
    else return ""
}



export default function  Catalog() {

    const {
        catalog,
          } = useContext(useStateContext);

          console.log("catalog",catalog)
          

  return (
       <>
       <ul className='List'>
      { catalog && catalog.length>0 && catalog.map( element => {
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

