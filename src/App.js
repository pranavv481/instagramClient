import React, { useEffect, createContext, useReducer, useContext } from 'react';
import './App.css';
import Navbar from './componnents/Navbar';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './componnents/Home';
import Signin from './componnents/Signin';
import Signup from './componnents/Signup';
import Profile from './componnents/Profile';
import CreatePost from './componnents/CreatePost';
import { reducer, initialState } from './reducers/userReducers';
import UserProfile from "./componnents/UserProfile";
export const UserContext = createContext()


const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      // history.push("/")
    } else {
      history.push("/signin")
    }
  }, [])
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/signin"><Signin /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route exact path="/profile"><Profile /></Route>
      <Route path="/createpost"> <CreatePost /></Route>
      <Route path="/profile/:userid"><UserProfile /></Route>

    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
