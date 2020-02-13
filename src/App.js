import React,{lazy, Suspense, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './css/global.css'
import firebase from './firebase'
import Dashboard from './pages/Dashboard';

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
        
            {firebaseInitialized !== false 
              ?
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
              </BrowserRouter>
              :
              <h1>Loading...</h1>
            }
          
      </Suspense>
    </div>
  );
}

export default App;
