
import './Filter.css';
import { useState, useContext, useEffect } from 'react';
import { useStateContext } from "./useStateContext";


export default function  Filter() {

    const {
        filter,
        catalog
          } = useContext(useStateContext);

 const [colors, setColors] = useState([])
 const [kinds, setKinds] = useState([]) 

// уникальные значения в массиве 
 function unique(arr) {
    return Array.from(new Set(arr));
  }
 
 // Формирование списков возможных значений фильтров
 useEffect(()=>{
    if (catalog && catalog.length > 0) {
        let colors = unique(catalog.map(item => item.color))
        let kinds = unique(catalog.map(item => item.kind))
        setColors(colors)
        setKinds(kinds)
    }

 },[catalog])
          

  return (
    <>
    <h2 className='FilterHeader'>
    Фильтры 
    </h2>

    </>
  )
}

