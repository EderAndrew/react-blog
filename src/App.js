import React,{lazy, Suspense, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './css/global.css'
import firebase from './firebase'

const Home = lazy(() => import('./pages/Home'))
 
const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInialized().then(result => {
      setFirebaseInitialized(result)  
    })
  }, [])
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>} >
        <BrowserRouter>
          <Switch>
            {firebaseInitialized !== false 
              ? 
              <Route exact path="/" component={Home}/>
              :
              <h1>Loading...</h1>
            }
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
