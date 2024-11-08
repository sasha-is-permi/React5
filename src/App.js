
import { useState, useEffect } from 'react';
import './App.css';
import CatalogList from './CatalogList';
import Filter from './Filter'
import Pagination from './Pagination'
import Basket from './Basket'
import Pay from './Pay'
import { useStateContext } from "./useStateContext";
import {catalog_list} from "./catalog_list"


function App() {

  // Тут вносятся данные, общие для всей программы

  const [catalog, setCatalog] = useState([]);
  const [catalogFiltred, setCatalogFiltred] = useState([]);
  const [filter, setFilter] = useState({
		color: "",
    kind:  "",
		price_at:0,
    price_to:0,
		is_new: "",
  });

  const [basket, setBasket] = useState([]);

  let context = {
    catalog,
    setCatalog, 
    catalogFiltred,
    setCatalogFiltred, 
    filter,
    setFilter,
    basket,
    setBasket
  };


// Установка значений каталога
  useEffect(()=>{
    setCatalog([...catalog_list])
    setCatalogFiltred([...catalog_list.filter((item,index) => index<20)])
  },[])

  return (
    <useStateContext.Provider value={context}>
    <div className="App">
      <header className="App-header">
        Каталог игрушечных пони
      </header>

     <Basket/>
     <Pay/>

       <Filter/>
       <CatalogList/>
       <Pagination/>




    </div>
    </useStateContext.Provider>
  );
}

export default App;
