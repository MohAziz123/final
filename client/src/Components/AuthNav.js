import {Navbar,Container,Nav} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import {Link, useNavigate} from "react-router-dom"
import { logout } from "../Redux/Actions/AuthActions"

const AuthNav=()=>{
  const token = localStorage.getItem("token")

  const user = useSelector(state => state.AuthReducers.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
    return(
        <div  className="head">
             <Navbar  bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img className="imagetitre" src="/A.png" alt="Not Found"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
           

          
          

            {
              token && user.role === "client" ?
              <>
               <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
               <Nav.Link as={Link} to='/Listabonnement'>Abonnement</Nav.Link>
               <Nav.Link as={Link} to='/listmycommande'>My Commandes</Nav.Link>
               <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :
              token && user.role === "admin" ?
              <>
               <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
               <Nav.Link as={Link} to='/ListUser'>Users</Nav.Link>
               <Nav.Link as={Link} to='/Listabonnement'>Abonnement</Nav.Link>
               <Nav.Link as={Link} to='/listcommande'>Commandes</Nav.Link>
               <Nav.Link as={Link} to='/listmycommande'>My Commandes</Nav.Link>
               <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :
              <>
               <Nav.Link as={Link} to='/login'>Login</Nav.Link>
               <Nav.Link as={Link} to='/registre'>Register</Nav.Link>
              </>
          
            }

  
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default AuthNav