import {GETCOMMANDES, GETMYCOMMANDES, GETONECOMMANDE } from "../ActionsTypes/CommandeTypes"
 
const initialState={
    commandes : [],
    myCommandes : [],
    commande : {}
}

const CommandeReducer=(state = initialState,action)=>{
    switch (action.type) {
    
        case GETCOMMANDES : return {...state,commandes : action.payload}
        case GETONECOMMANDE  : return {...state,commande : action.payload}
        case GETMYCOMMANDES : return {...state,myCommandes : action.payload}
        default: return state
    }
}

export default CommandeReducer