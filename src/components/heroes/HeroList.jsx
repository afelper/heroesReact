import React, { useMemo } from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard'

//publiser puede ser marvel o dc
// recibe props de DcScreen y MarvelScreen


const HeroList = ( {publisher} ) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-6 g-4">
               { 
                    heroes.map(hero => { 
                        return (
                            <HeroCard key={hero.id} {...hero} />
                        )
                    }) 
                   
                }
            </div>

            
        
        </>

    )
}

export default HeroList
