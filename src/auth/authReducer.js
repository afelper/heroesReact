import { types } from "../types/types";

// //estado cuando esta autenticado
// state = {
//     logged: true
// }

// //estado cuando no esta autenticado
// state = {
//     logged: false
// }

//payload datos que mofican el estado

export const authReducer = (state={}, action ) => {
    switch (action.type) {
        case types.login:
            return{
                ...action.payload, //action.name
                logged: true //estado
            }
        case types.logout:
            return{
                logged: false //estado
            }
          
        default:
            return state; //retornar state inicial de authReducer
    }
}

//useReducer es una funcion para operaciones multiples