import { useState, useEffect } from 'react'
import "../src/assets/css/miapi.css";


const App=()=>{
  
  const [state, setState] = useState([]);
  const [search, setSearch]=useState("");
  const [filter, setFilter] = useState([]);
  
  const getData = async () => {
      const response = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await response.json();
      setState(data);
  };
  
  useEffect(() => {
      getData();
  }, []);

  
  
  const handleSearch=(e)=>{
    if(e.target.value===""){
      setSearch(e.target.value);
      setSort([...state]);
      return;
    }
    setSearch(e.target.value);
    setFilter([...state.filter((item)=>{return(item.name.toLowerCase().includes(search.toLowerCase()))})])
  }

  const handleSorting=(e)=>{
    if(e.target.value==="1"){
      setSort([...filter.sort(AtoZ)])
      return;
    } else if (e.target.value==="2"){
      setSort([...filter.sort(ZtoA)])
      return;
    } else if(e.target.value==="3"){
      setSort([...filter.sort(age)])
      return;
    } else if(e.target.value==="4"){
      setSort([...filter.sort(age).reverse()])
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
          <a href="#"><img src="./public/Imagen1.png" alt="" width="100" className="d-inline-block m-2 " /></a>
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
      
      <div className="text-dark container-fluid"><ul>
            {state.filter((item)=>{return(item.name.toLowerCase().includes(search.toLowerCase()))}).map((item) => {
                return (

                    <div className="card m-2 grid-gallery" width="200" height="200" key={item.id} >
                        <img  src={item.image===""?"./public/sinRetrato.png":item.image} className="card-img border border-secondary w-50" alt={`Imagen de ${item.name}`} />
                        <div className="card-body">
                            <h3 className="card-title text-center text-dark">{item.name}</h3>
                            <p className="card-text text-center">{item.house}</p>
                        </div>
                        <ul className="list-group list-group-flush" >
                            <li className="list-group-item">Fecha de Nacimiento: <span>{item.dateOfBirth===""?"Desconocida":item.dateOfBirth}</span></li>
                            <li className="list-group-item">Sexo: <span>{item.gender==="male"?"Hombre":item.gender==="female"?"Mujer":"otro"}</span></li>
                            <li className="list-group-item">Color de Ojos: <span className="rounded-circle" style={{color:`${item.eyeColour}`}}><i className="fa-solid fa-eye"></i></span></li>
                            <li className="list-group-item">Pureza de Sangre: <span>{(item.ancestry==="half-blood"?"Mestizo":item.ancestry==="muggleborn"?"Hijo de Muggle":item.ancestry==="pure-blood"?"Sangre Pura":item.ancestry===""?"Desconocida":"Otro")} </span></li>
                            <li className="list-group-item">Estado: <span>{item.alive?"Vivo":"Fallecido"} </span></li>
                        </ul>
                    </div>
                )
            })}
        </ul>

        </div>
      <footer className='m-2 text-secondary d-flex flex-column justify-content-center align-items-center'>
        <p>Todos los derechos reservados.</p>
        <p>Matias Cuadros E.</p>
        
      </footer>
    </div>
  )
}


export default App
