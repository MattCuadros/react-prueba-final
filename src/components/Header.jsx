import img1 from "../../public/Imagen1.png";

const Header=({handleSearch, handleSorting})=>{
    return(
        <header className='container-fluid text-light border border-light shadow p-3 mb-5 bg-body-dark-100 rounded d-flex justify-content-between align-items-center align-content-center'>
            <div className='d-flex justify-content-center align-items-center align-content-center'>
                <a href="#"><img src={img1} alt="" width="100" className="d-inline-block m-2 " /></a>
                <h1>Personajes de Harry Potter</h1>
            </div>
            <div>
                <input type="search" name="search" id="search" className='form-control w-100 m-2' placeholder='Buscar...' onChange={handleSearch} />
                <select className='form-select w-100 m-2' onChange={handleSorting}>
                    <option value="" hidden >Ordenar...</option>
                    <option value="1">Alfabeticamente: A - Z</option>
                    <option value="2">Alfabeticamente: Z - A</option>
                    <option value="3">Por Edad: Menor a Mayor</option>
                    <option value="4">Por Edad: Mayor a Menor</option>
                </select>
            </div>


        </header>
    )
}

export default Header;