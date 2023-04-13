import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getabonnements } from "../Redux/Actions/AbonnementActions"
import CardAbonnement from "./CardAbonnement"

const ListAbonnement=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getabonnements())
    },[])

    const abonnements = useSelector(state=>state.AbonnementReducer.abonnements)
    return(
        <div>
            {
                abonnements.map(el=><CardAbonnement el={el} />)
            }
        </div>
    )
}

export default ListAbonnement