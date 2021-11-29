import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../auth/authContext'

//no deja entrar a marvel dc , search sino esta logueado
//si esta logueado llamara un componente
// si no esta logueado se enviara a una ruta
// estado para consultar si existe por medio del useContext

//acceder a componentes hijos (props) o children

const PrivateRoutes = ( {children} ) => {

    const { user } = useContext(AuthContext)
    const {pathname, search} = useLocation() //que ruta estoy parado en mi aplicativo
    // console.log(location) //(pathname, search)= location

    //ej:localhost:3000/search?q=batman
    localStorage.setItem('lastPath', pathname + search);



    return user.logged
    ? children //compnentes hijos
    : <Navigate to = "/login" />
}

export default PrivateRoutes
