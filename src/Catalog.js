
import './Catalog.css';

import {catalog_list} from "./catalog_list"

const isNew = (item) => {
    if (item===true) return "Новинка"
    else return ""
}


const ListItems =  catalog_list.map( (element, index) => {
    return (
            <li key={index}  className='Li'>
                <span className='Element'> {element.name} </span>
                <span className='Element'> {element.color} </span>
                <span className='Element'> {element.kind} </span>
                <span className='Element'> {element.price} р. </span>
                <span className='Element'> { isNew (element.is_new ) } </span>
            </li>
       
    )
})


export default function  Catalog() {

console.log(catalog_list)
  return (
       <>
       <ul className='List'>
       { ListItems }
       </ul>
       </>

  );
}

