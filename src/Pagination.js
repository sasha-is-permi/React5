
import './Pagination.css';
import { useContext } from 'react';
import { useStateContext } from "./useStateContext";


export default function  Pagination() {

    const {
        catalog,
        setCatalogFiltred,
          } = useContext(useStateContext);



const handlePaginationMinus = () => {

            let calalogNewFilter = catalog.filter((item, index) => (index < 20 ) )
              setCatalogFiltred([...calalogNewFilter])
        
         }    
        
 
const handlePaginationPlus = () => {

  let calalogNewFilter = catalog.filter((item, index) => ((index > 20) &&  (index < 40 )) )
      
        setCatalogFiltred([...calalogNewFilter])


}      



  return (
       <>
       <div className='paginationBlock'>
       <span className='paginationLeft'  onClick={handlePaginationMinus}> &lt; </span> 
       <span className="paginationNumber" onClick={handlePaginationMinus}> 1 </span>
       <span className="paginationNumber" onClick={handlePaginationPlus} > 2 </span>
       <span className='paginationRight' onClick={handlePaginationPlus}> &gt; </span> 
       </div>
       </>

  );
}

