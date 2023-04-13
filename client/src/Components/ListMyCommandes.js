import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CardCommande from "./CardCommande"
import { getMyCommande } from "../Redux/Actions/CommandeActions"
import { Table } from "react-bootstrap"


const ListMyCommandes=()=>{

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getMyCommande())
    },[])

    const myCommandes = useSelector(state=>state.CommandeReducer.myCommandes)

    return(
        <Table striped bordered hover>
        <thead>
          <tr>
           
            <th>Abonnement</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Do</th>
          </tr>
        </thead>
        <tbody>

            {
                myCommandes && myCommandes.map(el=><CardCommande el={el} />)
            }
               </tbody>
   </Table>

    )
}

export default ListMyCommandes