import { useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { current, deleteProfile } from "../Redux/Actions/AuthActions"

const Profile=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=>state.AuthReducers.user)
    const navigate = useNavigate()
    
    return(
        <div className="iheb">
            {
                user &&
                <>
                  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.pic} />
                <Card.Body>
                <Card.Title>{user.name}</Card.Title>            
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.phone}</Card.Text>
                <div className="raslen">
                <Button variant="outline-success"><Link style={{textDecoration : 'none',color:"green"}} to={`/editProfile/${user._id}`}>Edit</Link></Button>
                {/* <Card.Link as={Link} to={`/editProfile/${user._id}`}></Card.Link> */}
                <Button onClick={()=> dispatch(deleteProfile(user._id,navigate))} variant="outline-danger">Delete</Button>
               
               </div> </Card.Body>
        </Card>
               
                </>
            }
        
        </div>
    )
}

export default Profile