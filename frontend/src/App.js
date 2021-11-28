import  React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom' 
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from  './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/profileScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import UserListScreen from './Screens/UserListScreen'
import OrderScreen from './Screens/OrderScreen'
import UserEditScreen from './Screens/UserEditScreen'
import ProductListScreen from './Screens/ProductListScreen'
import ProductEditScreen from './Screens/ProductEditScreen'
import OrderListScreen from './Screens/OrderListScreen'
import {useState} from'react'
import { useSelector } from 'react-redux'
import Products from './Screens/Products'



function App() {
const products = useSelector(state =>state.productList.products)
  const [filter, setFilter] = useState("all")
  const productList =(products)=>{
    switch (filter) {
      case "men":
        return products.filter(elm=>elm.gender===filter)
        case "women":
        return products.filter(elm=>elm.gender===filter)
      
    
      default:
        return products;
    }
  }
  return (
    <>
    <Router>
    <Header setFilter={setFilter}/>
  <main>
  <Container>
  <Route exact path='/products/:gender' render={(props)=><Products {...props} products={productList(products)}/>} />
 <Route path='/' component={HomeScreen} exact />
  <Route exact path='/search/:keyword' component={HomeScreen} />
  <Route exact path='/login' component={LoginScreen}  />
  <Route exact path='/admin/user/:id/edit' component={UserEditScreen}  />
  <Route exact path='/admin/product/:id/edit' component={ProductEditScreen}  />
  <Route exact path='/register' component={RegisterScreen}  />
  <Route exact path='/profile' component={ProfileScreen}  />
  <Route exact path='/product/:id' component={ProductScreen}  />
  <Route exact path='/cart/:id?' component={CartScreen}  />
  <Route exact path='/shipping' component={ShippingScreen}/>
  <Route exact path='/payment' component={PaymentScreen}/>
  <Route exact path='/placeorder' component={PlaceOrderScreen} />
  <Route exact path='/order/:id' component={OrderScreen}  />
  <Route exact path='/admin/userlist' component={UserListScreen}  />
  <Route exact path='/admin/productlist' component={ProductListScreen}  />
  <Route exact path='/admin/orderlist' component={OrderListScreen}  />



  
  </Container>
</main>
<Footer/>
</Router>
    </>
  );
}

export default App;
