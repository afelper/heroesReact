import React,{ useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

const LoginScreen = () => {

    const navigate = useNavigate()
    const { dispatch }= useContext(AuthContext)

    //botón Login redirige a marvel 
    const handleLogin = ()=>{
        //cuando esta logueado
        //actualizar el estado
        const action = {
            type: types.login,
            payload: { name: 'Daniel Duque' }
        };

        dispatch(action);

        //guardar última ubicación antes de salir del login
        const lastPath = localStorage.getItem('lastPath')


        navigate(lastPath, {
            replace: true   // no se puede devolver atras
        })
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
