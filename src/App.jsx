import { useState } from 'react'

import MiApi from './components/MiApi'

const App=()=>{

  const [search, setSearch]=useState("");
  const [sort, setSort]=useState("");
  
  const handleSearch=(e)=>{
    setSearch(e.target.value);
  }

  const handleSorting=(e)=>{
    if(e.target.value==="1"){
      setSort([...filteredArray.sort(AtoZ)])
      return;
    } else if (e.target.value==="2"){
      setSort([...filteredArray.sort(ZtoA)])
      return;
    } else if(e.target.value==="3"){
      setSort([...filteredArray.sort(age)])
      return;
    } else if(e.target.value==="4"){
      setSort([...filteredArray.sort(age).reverse()])
      return;
    }
  }

  const AtoZ=(a,b)=>{
    if(a.name<b.name){
      return 1;
    } else if(a.name>b.name){
      return -1;
    } else{
      return 0;
    }

  }

  return(
    <div>
      <header className='container-fluid text-light border border-light shadow p-3 mb-5 bg-body-dark-100 rounded d-flex justify-content-between align-items-center align-content-center'>
        <div className='d-flex justify-content-center align-items-center align-content-center'>
          <a href="#"><img src="./src/assets/img/Imagen1.png" alt="" width="100" className="d-inline-block m-2 " /></a>
          <h1>Personajes de Harry Potter</h1>
        </div>
        <div>
          <input type="search" name="search" id="search" className='form-control w-100 m-2' placeholder='Buscar...' onChange={handleSearch} />
          <select className='form-select w-100 m-2'>
            <option value="" hidden onChange={handleSorting}>Ordenar...</option>
            <option value="1">Alfabeticamente: A - Z</option>
            <option value="2">Alfabeticamente: Z - A</option>
            <option value="3">Por Edad: Menor a Mayor</option>
            <option value="4">Por Edad: Mayor a Menor</option>
          </select>
        </div>


      </header>
      
      <MiApi search={search} sort={sort}/>
      <footer className='m-2 text-secondary d-flex flex-column justify-content-center align-items-center'>
        <p>Todos los derechos reservados.</p>
        <p>Matias Cuadros E.</p>
        
      </footer>
    </div>
  )
}


export default App
