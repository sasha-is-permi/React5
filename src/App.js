
import { useState, useEffect } from 'react';
import './App.css';
import Catalog from './Catalog'
import Filter from './Filter'
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

  let context = {
    catalog,
    setCatalog, 
    catalogFiltred,
    setCatalogFiltred, 
    filter,
    setFilter
  };


// Установка значений каталога
  useEffect(()=>{
    setCatalog([...catalog_list])
    setCatalogFiltred([...catalog_list])
  },[])

  return (
    <useStateContext.Provider value={context}>
    <div className="App">
      <header className="App-header">
        Каталог игрушечных пони
      </header>
      <Filter/>
      <Catalog/>
    </div>
    </useStateContext.Provider>
  );
}

export default App;
