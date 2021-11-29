import React, { useMemo } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';



const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate();  
    // const params = useParams();
    // console.log(params)
    //* current path

    //hero tiene odas las propiedades
    //const hero = getHeroById(heroId);
    //console.log(hero)


    //evitar muchos llamados con useMemo
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

   //si no existe hero
    if(!hero){
        return <Navigate to='/marvel' />;
    }
    const { id, superhero, alter_ego, publisher, first_appearance, characters} = hero;

 

      
    const handleReturn = () =>{
        navigate(-1); //ruta anterior
    }    

    return (
        <div>
            <h1>{publisher}</h1>
            <hr />
            <div className="col-3">

                <div className="card h-100">
                    <img src={`/assets/${id}.jpg`} className="card-img-top" alt={ superhero } />
                    <div className="card-body">
                        <h3 className="card-title"> {superhero} </h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> <b>alter ego: </b> { alter_ego }</li>
                            <li className="list-group-item"><b>first_appearance: </b>{ first_appearance }</li>
                            <li className="list-group-item"><b>characters: </b>{ characters }</li>
                        </ul>
                    </div>
                    <div className="card-footer text-end">
                    <button 
                        className="btn btn-primary"
                        onClick={handleReturn}
                    >
                        Regresar
                    </button>
                    </div> 
                </div>
            </div>    
        </div>
    )
}

export default HeroScreen
