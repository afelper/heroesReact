import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../auth/authContext'

// estado para consultar si existe por medio del useContext

//acceder a componentes hijos (props) o children

const PublicRoutes = ( {children} ) => {

    const { user } = useContext(AuthContext)

    return user.logged
    ? <Navigate to = "/marvel" /> //logueado te envia a marvel
    : children //te muestra el hijo => login
}

export default PublicRoutes
