import { GETABONNEMENTS, GETONEABONNEMENT } from "../ActionsTypes/AbonnementTypes"

const initialState={
    abonnements : [],
    abonnement : {}
}

const AbonnementReducer=(state = initialState,action)=>{
    switch (action.type) {
        case GETABONNEMENTS : return {...state,abonnements : action.payload}
        case GETONEABONNEMENT : return {...state,abonnement : action.payload}
    
        default: return state
    }
}

export default AbonnementReducer