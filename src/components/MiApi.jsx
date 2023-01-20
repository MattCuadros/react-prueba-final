import "../assets/css/miapi.css";
import sinRetrato from "./src/assets/img/sinRetrato.png";


const MiApi = ({filteredArray}) => {

    return (
    <div className="text-dark container-fluid">
        <ul>{filteredArray.map((item) => {
            return (

                <div className="card m-2 grid-gallery" width="200" height="200" key={item.id} >
                    <img src={item.image === "" ? {sinRetrato} : item.image} className="card-img border border-secondary w-50" alt={`Imagen de ${item.name}`} />
                    <div className="card-body">
                        <h3 className="card-title text-center text-dark">{item.name}</h3>
                        <p className="card-text text-center">{item.house}</p>
                    </div>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item">Fecha de Nacimiento: <span>{item.dateOfBirth === "" ? "Desconocida" : item.dateOfBirth}</span></li>
                        <li className="list-group-item">Sexo: <span>{item.gender === "male" ? "Hombre" : item.gender === "female" ? "Mujer" : "otro"}</span></li>
                        <li className="list-group-item">Color de Ojos: <span className="rounded-circle" style={{ color: `${item.eyeColour}` }}><i className="fa-solid fa-eye"></i></span></li>
                        <li className="list-group-item">Pureza de Sangre: <span>{(item.ancestry === "half-blood" ? "Mestizo" : item.ancestry === "muggleborn" ? "Hijo de Muggle" : item.ancestry === "pure-blood" ? "Sangre Pura" : item.ancestry === "" ? "Desconocida" : "Otro")} </span></li>
                        <li className="list-group-item">Estado: <span>{item.alive ? "Vivo" : "Fallecido"} </span></li>
                    </ul>
                </div>
            )
        })}
    </ul>

    </div>)

   
    
}

export default MiApi;