
import { useState, useEffect } from 'react';
import './App.css';
import Catalog from './Catalog'
import { useStateContext } from "./useStateContext";
import {catalog_list} from "./catalog_list"


function App() {

  // Тут вносятся данные, общие для всей программы

  const [catalog, setCatalog] = useState([]);

  let context = {
    catalog,
    setCatalog, 
  };


// Установка значений каталога
  useEffect(()=>{
    setCatalog([...catalog_list])
  },[])

  return (
    <useStateContext.Provider value={context}>
    <div className="App">
      <header className="App-header">
        Каталог игрушечных пони
      </header>
      <Catalog/>
    </div>
    </useStateContext.Provider>
  );
}

export default App;
