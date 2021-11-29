import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routers/AppRouter'

//{}  state vacio
//init es una función

const init = () => {
    //return si el usuario existe || no existe
    return JSON.parse(localStorage.getItem('user'))|| {logged: false} //estado inicial
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    //guardar usuario no se borra cuando se actualiza el sitio web
    useEffect(() => {
        if(!user){
            return
        }
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (

        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
            
    )
}

export default HeroesApp
