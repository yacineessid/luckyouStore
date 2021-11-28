  
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer ,productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import  {userDeleteReducer, userDetailsReducer, userListReducer, userLOginReducer,
  userRegisterReducer, userUpdateProfilesReducer, userUpdateReducer,  } from './reducers/userReducers'
  import {orderCreateReducer, orderDetailsReducer, orderPayReducer , orderListMyReducer, orderListReducer, orderDeliverReducer} from './reducers/orderReducers'

const reducer = combineReducers({
    productList :productListReducer,
    productDetails:productDetailsReducer,
    cart :cartReducer, 
    userLogin : userLOginReducer ,
    userRegister :userRegisterReducer,
    userDetails :userDetailsReducer ,
    userUpdateProfile:userUpdateProfilesReducer,
    userList:userListReducer,
    orderCreate: orderCreateReducer ,
    orderDetails :orderDetailsReducer,
    orderPay : orderPayReducer,
    orderListMy :orderListMyReducer,
    userDelete :userDeleteReducer,
    userUpdate :userUpdateReducer ,
    productDelete :productDeleteReducer,
    productCreate :productCreateReducer,
    productUpdate :productUpdateReducer ,
    orderList : orderListReducer ,
    orderDeliver :orderDeliverReducer,
   
})

const cartItemsFromStorage =localStorage.getItem('cartItems')  ? JSON.parse
(localStorage.getItem('cartItems')) :[]

const userInfoFromStorage =localStorage.getItem('userInfo')  ? JSON.parse
(localStorage.getItem('userInfo')) : null

const shippingAddressfromStorage =localStorage.getItem('shippingAddress')  ? JSON.parse
(localStorage.getItem('shippingAddress')) : {}




const initialState  = {
  cart :{
    cartItems : cartItemsFromStorage ,
    shippingAddress : shippingAddressfromStorage,
  },
  userLogin :{
    userInfo: userInfoFromStorage
  }
}
 
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store