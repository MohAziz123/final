
import { combineReducers} from "redux"
import AuthReducers from "./AuthReducers"

import ErrorReducer from "./ErrorReducer"

import AbonnementReducer from "./AbonnementReducer"

import CommandeReducer from "./CommandeReducer"

const rootReducer = combineReducers({AuthReducers,ErrorReducer,AbonnementReducer,CommandeReducer})

export default rootReducer