
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

    let calalogNewFilter = catalog.filter(item => {
        console.log(filter.is_new)
        return (
          (filter.color ? (item.color === filter.color) : true ) 
            &&   (filter.kind ? (item.kind === filter.kind) : true ) 
            &&  ( filter.is_new!=="" ? item.is_new.toString() === filter.is_new.toString() : true )
          
        )}
        
        )
        setCatalogFiltred([...calalogNewFilter])


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

        <div className='Element'>
            <div>
                Новинка
            </div>
        <select value={filter.is_new} onChange={(event) => setFilter({...filter, is_new:event.target.value})}>
        <option value=""></option>
        <option value={true}>Да</option>
        <option value={false}>Нет</option>
      </select>
      

        </div>
        
        <button onClick={filterCatalog} className='FilterButton'>
        Найти
    </button>
    </div>

    </>
  )
}

