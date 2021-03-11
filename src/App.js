import React, {  useEffect } from 'react'
import Homepage from './pages/Homepage/Homepage'
import shopPage from './pages/Shop/Shop'
import Header from './components/Header'
import AuthPage from './pages/Auth'
import CheckoutPage from './pages/CheckoutPage'
import { auth, createUserProfileDocument } from './firebase/firebase'
import './css/App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from "./actions/user";


function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  
  let unsubscribeFromAuth = null;

  useEffect(() => {
   unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth)

       userRef.onSnapshot(snapShot => {
         console.log(snapShot.data())

         dispatch(setCurrentUser({
          'id': snapShot.id,
          ...snapShot.data()

        })) 

       });
       
     }

     dispatch(setCurrentUser(userAuth))
    })
  }, [])


  console.log(user)
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={shopPage}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        <Route exact path="/signin" render={ () => user.currentUser ? <Redirect to="/"/> : <AuthPage /> }/>
      </Switch>
    </div>
  )
}
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default App
