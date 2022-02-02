import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Pages and Components
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import OneTravel from './pages/OneTravel';

//Authentiacation Context
import { AuthContext } from './context/AuthContext';

//React Hooks
import { useContext } from 'react';

function App() {
  const { state } = useContext(AuthContext);

  return (
      <div className="App">
      {state.authIsReady && (
        <BrowserRouter>
          <Navbar />
        
          <Switch>
            <Route exact path='/'>
              {!state.user && <Redirect to='/login'/>}
                  {state.user && <Home />}
            </Route>
            <Route path='/login'>
              {!state.user && <Login />}
              {state.user && <Redirect to='/'/>}
            </Route>
            <Route path='/signup'>
              {!state.user && <Signup />}
              {state.user && <Redirect to='/'/>}
            </Route>
            <Route path='/travels/:id'>
              {!state.user && <Redirect to='/login' />}
              {state.user && <OneTravel />}
            </Route>
          </Switch>
              
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
