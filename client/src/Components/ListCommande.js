import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CardCommande from "./CardCommande"
import {getcommande } from "../Redux/Actions/CommandeActions"
import { Table } from "react-bootstrap"


const ListCommande=()=>{

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getcommande())
    },[])

    const commandes = useSelector(state=>state.CommandeReducer.commandes)

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
      commandes && commandes.map(el=><CardCommande el={el} />)
      }
      </tbody>
    </Table>
        // <div>

        //     {
        //         commandes && commandes.map(el=><CardCommande el={el} />)
        //     }

        // </div>
    )
}

export default ListCommande