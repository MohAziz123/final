import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getusers } from "../Redux/Actions/AuthActions"
import CardUser from "./CardUser"

const ListUser=()=>{

const dispatch = useDispatch()
 
useEffect(()=>{
    dispatch(getusers())
},[])



const users = useSelector(state =>state.AuthReducers.users)
    return(
        <div>
            {
                users && users.map(el=><CardUser el={el} />)
            }
        </div>
    )
}


export default ListUser