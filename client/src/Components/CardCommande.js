import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {deletecommande, updatecommande} from "../Redux/Actions/CommandeActions"
import { Card } from "react-bootstrap"
const CardCommande=({el})=>{

    const dispatch = useDispatch()

    const user = useSelector(state => state.AuthReducers.user)
    return(
        // <div>
                 <tr>
                  <td>{el.abonnement.namedepack}</td>
                  <td>{el.owner.name}</td>
          <td>{el.status}</td>
        
          
          <td>
          {
                user.role == "admin" &&
                <>
                  <button onClick={()=>dispatch(updatecommande({status : "Rejeter"},el._id))} variant='danger' >Rejeter</button>
                  <button onClick={()=>dispatch(updatecommande({status : 'Accepter'},el._id))} variant='danger' >Accepter</button>
                  
                </>
               }
                            
               <button onClick={()=>dispatch(deletecommande(el._id,user.role))} variant='danger' >delete</button>
          </td>
        </tr>
        // <Card style={{ width: '18rem' }}>
        //      <Card.Body>
        //      <Card.Title>{el.status}</Card.Title>
        //        <Card.Title>{el.owner.name}</Card.Title>
        //        <Card.Subtitle className="mb-2 text-muted">{el.abonnement.namedepack}</Card.Subtitle>
        //        {/* <Card.Link as={Link} to={`/editcommande/${el._id}`}>Edit</Card.Link>             */}

        //        {
        //         user.role == "admin" &&
        //         <>
        //           <button onClick={()=>dispatch(updatecommande({status : "Rejeter"},el._id))} variant='danger' >Rejeter</button>
        //           <button onClick={()=>dispatch(updatecommande({status : 'Accepter'},el._id))} variant='danger' >Accepter</button>
        //           <button onClick={()=>dispatch(deletecommande(el._id,user.role))} variant='danger' >delete</button>
        //         </>
        //        }
                            
        //        <button onClick={()=>dispatch(deletecommande(el._id,user.role))} variant='danger' >delete</button>
        //      </Card.Body>
        //    </Card>
        //        </div>
       
    )
}

export default CardCommande