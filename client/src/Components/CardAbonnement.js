import {  Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deleteAbonnemet } from "../Redux/Actions/AbonnementActions"
import { addcommande } from "../Redux/Actions/CommandeActions"

const CardAbonnement=({el})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.AuthReducers.user)
    return(
        <div className="ghjdf" >
 <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.namedepack}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.prix}</Card.Subtitle>
        
        <Card.Text>
          {el.date}
        </Card.Text>
        
        {
          user.role == "admin" ?
          <>
          <Card.Link as={Link} to={`/editabonnement/${el._id}`}>Edit</Card.Link>
           <Button onClick={()=>dispatch(deleteAbonnemet(el._id))} variant="info" >delete</Button>
          </>
          :
          <Button onClick={()=>dispatch(addcommande({abonnement : el._id,status : "En cours"},navigate))} variant='danger' >Buy</Button>

        }
        
        
       
      </Card.Body>

    </Card>
            
        </div>

    )
}

export default CardAbonnement