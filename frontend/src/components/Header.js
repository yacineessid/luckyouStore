import React from 'react'
import {Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer , } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown , Button  } from 'react-bootstrap'
import { logout } from '../actions/userActions'


import SearchBox from './SearchBox'

const Header = ({setFilter}) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header style={{color:'white'}}>
      <Navbar style={{backgroundColor:'gray'}} variant='dark' expand='lg' collapseOnSelect>
        <Container  >
          <LinkContainer to='/'>
            <Navbar.Brand>LUCKYOU STYLE </Navbar.Brand>
          </LinkContainer>

           
          <Navbar.Toggle  aria-controls='basic-navbar-nav' className='mb-1'   />
          <Navbar.Collapse id='basic-navbar-nav' >
          <Route    render={({ history }) => <SearchBox  history={history} />} />
           <Nav className='ml-auto'>
         
           <LinkContainer style={{backgroundColor:'inherit'}} to='/products/men'>
            <Nav.Link name="men" onClick={(e)=>setFilter(e.target.name)}>Men</Nav.Link>              
            </LinkContainer>    
            <LinkContainer style={{backgroundColor:'inherit'}} to='/products/women'>
            <Nav.Link name="women" onClick={(e)=>setFilter(e.target.name)}>Women </Nav.Link>
           
            </LinkContainer>
                
             <LinkContainer to='/cart'>
                <Nav.Link>
                  <i  className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown style={{color:'white'}} title={userInfo.user.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer style={{color:'white'}} to='/login'>
                  <Nav.Link>
                    <i  className='fas fa-user'></i> Sign In 
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.user.isAdmin && (
                  <NavDropdown  title='Admin' id='adminmenu'>
                  <LinkContainer  to='/admin/userlist'>
                    <NavDropdown.Item >Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer  to='/admin/productlist'>
                  <NavDropdown.Item >  Products </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer  to='/admin/orderlist'>
                  <NavDropdown.Item >  Orders </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  )
}

export default Header
