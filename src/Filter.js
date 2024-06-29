
import './Filter.css';
import { useState, useContext, useEffect } from 'react';
import { useStateContext } from "./useStateContext";


export default function  Filter() {

    const {
        filter,
        setFilter,
        catalog,
        setCatalogFiltred,
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
        setColors(["",...colors])
        setKinds(["",...kinds])
    }

 },[catalog])
         
 
 useEffect(()=>{
console.log(filter)
 },[filter])


const filterCatalog = () => {



    if (filter.color && !filter.kind)  {
        let calalogNewFilter = catalog.filter(item => item.color === filter.color)
        setCatalogFiltred([...calalogNewFilter])
    }

    else if (!filter.color && filter.kind) {
        let calalogNewFilter = catalog.filter(item => item.kind === filter.kind)
        setCatalogFiltred([...calalogNewFilter])
    }

    
    else if (filter.color && filter.kind) {
        let calalogNewFilter = catalog.filter(item => {return ((item.color === filter.color) && (item.kind === filter.kind))})
        setCatalogFiltred([...calalogNewFilter])
    }



}

  return (
    <>
    <h2 className='FilterHeader'>
    Фильтры 
    </h2>
    <div className='Filter'>
        <div className='Element'>
            <div>
                Цвет
            </div>
            <div>
            <select value={filter.color} onChange={(event) => setFilter({...filter, color:event.target.value})}>
           {colors && colors.length>0 && colors.map((text, index) => {
		return <option key={index}>{text}</option>;
	}) }
		</select>
            </div>

        </div>

        <div className='Element'>
            <div>
                Вид
            </div>
            <div>
            <select value={filter.kind} onChange={(event) => setFilter({...filter, kind:event.target.value})}>
           {kinds && kinds.length>0 && kinds.map((text, index) => {
		return <option key={index}>{text}</option>;
	}) }
		</select>
            </div>

        </div>
        
        <button onClick={filterCatalog}>
        Найти
    </button>
    </div>

    </>
  )
}

