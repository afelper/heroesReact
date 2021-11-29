import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroByName';
import HeroCard from '../heroes/HeroCard';

//npm install query-string

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation() //desestructuracion

    // console.log(location)
    const {q=''} = queryString.parse(location.search);

    //no borra cuando reacarga la pagina useform
    const [formValues, handleInputChange] = useForm({
        searchText: q,
    })

    //obtener todos los datos de mi formulario
    const {searchText}= formValues;

    const handleSubmit =(e) =>{
        e.preventDefault();
        navigate(`?q=${searchText}`)

    }

    // console.log('hola');
    //impedir que se modifique (recargue) el estado del input cuando se escriba algo
    //se utiliza useMemo
    const heroes =  useMemo( () => getHeroesByName(q), [q])

    

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h3>Buscar héroe</h3>
                    <form  onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Ingrese heroe a buscar"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            value={searchText}
                            autoComplete="off"
                        />
                        <button
                            className="btn btn-primary mt-3"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h3>Resultados</h3>
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
