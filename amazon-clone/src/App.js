import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HyuWzAdmfnlfY7bHj3hu8ZJI0uLl7cp5d16zzWi46jGUS52tRWAzgDqnG4D1Kc3jxenE23FBzlXf8s4HXCySN1500nON5Bdd4')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>>>', authUser)

      if (authUser) {
        // user jus logged in / user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // user is logged out

        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, []) 

  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path='/login'>            
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'> 
            <Header />  
            <Home />
          </Route>

        </Switch>
        </div>
    </Router>
  );
}

export default App;
