import { REGISTER, FAIL , LOGIN, CURRENT, LOGOUT} from "../ActionsTypes/AuthActions"
import { GETONEUSER, GETUSER } from "../ActionsTypes/UserTypes"

const initialState={
    user :{},
    errors : [],
    oneUser : {},
    users :[]
}


const AuthReducers=(state = initialState,action)=>{
    switch (action.type) {
        case FAIL : return {...state,errors : action.payload.errors,user : null}

        case REGISTER :
        localStorage.setItem("token",action.payload.token)
        return {...state,user : action.payload.newUser,errors : null}
        case LOGIN : 
        localStorage.setItem("token",action.payload.token)
        return {...state,user : action.payload.found,errors : null}

        case CURRENT  : return {...state,user : action.payload}

        case LOGOUT : 
        localStorage.removeItem("token")
        return {...state , user : null,errors : null}
               
        case GETUSER : return {...state,users : action.payload}
        case GETONEUSER : return {...state, oneUser : action.payload}

        default: return state
      
    }
}

export default AuthReducers