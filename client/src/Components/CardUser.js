import { Card , Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { deleteusers } from "../Redux/Actions/AuthActions"
import { Link } from "react-router-dom"

const CardUser=({el})=>{
    const dispatch =useDispatch()
    return(
        <div className="user" >
            <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.pic} />
                <Card.Body>
                <Card.Title>{el.name}</Card.Title>            
                <Card.Text>{el.email}</Card.Text>
                <Card.Link as={Link} to={`/edituser/${el._id}`}>Edit</Card.Link>
                <Button onClick={()=> dispatch(deleteusers(el._id))} variant='outline-danger'>Delete</Button>
                </Card.Body>
        </Card>
        </div>
    )
}

export default CardUser