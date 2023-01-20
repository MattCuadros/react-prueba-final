import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import MiApi from './components/MiApi';


const App=()=>{
  const [original, setOriginal]=useState([]);
  const [state, setState] = useState([]);
  const [search, setSearch]=useState("");

  
  const getData = async () => {
      const response = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await response.json();
      setState(data);
      setOriginal(data);

  };
  
  useEffect(() => {
      getData();
  }, []);

  
  
  const handleSearch=(e)=>{
    setSearch(e.target.value);

  }

  const filteredArray=state.filter((item)=>{return(item.name.toLowerCase().includes(search.toLowerCase()))});

  const handleSorting=(e)=>{

    if(e.target.value==="1"){
      setState([...original.sort(AtoZ)])      
      return;
    } else if (e.target.value==="2"){
      setState([...original.sort(AtoZ).reverse()])
      return;
    } else if(e.target.value==="3"){
      setState([...filteredArray.filter((item)=>{return(item.yearOfBirth!=null)}).sort(age)])
      return;
    } else if(e.target.value==="4"){
      setState([...filteredArray.filter((item)=>{return(item.yearOfBirth!=null)}).sort(age).reverse()])
      return;
    }
  }

  const AtoZ=(a,b)=>{
    if(a.name<b.name){
      return -1;
    } else if(a.name>b.name){
      return 1;
    } else{
      return 0;
    }

  }

  const age=(a,b)=>{
    if(a.yearOfBirth<b.yearOfBirth){
      return 1;
    } else if(a.yearOfBirth>b.yearOfBirth){
      return -1;
    } else{
      return 0;
    }
  }


  return(
    <div>
      <Header handleSearch={handleSearch} handleSorting={handleSorting}/>
      <div>
        <h2 className='text-light text-center my-3'>Cantidad de Resultados: {filteredArray.length}</h2>
      </div>
      <MiApi state={state} filteredArray={filteredArray}/>
      <Footer/>
    </div>
  )
}


export default App
