import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Admin from './Views/Admin';
import { useState } from 'react';
import Login from './Views/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [route, setRoute] = useState("home")
  console.log(route)

  if (!isAuth) {
    if (route === "home")
      return < Home isAuth={isAuth} setIsAuth={setIsAuth} setRoute={setRoute} />
    else if (route === "login")
      return <Login isAuth={isAuth} setIsAuth={setIsAuth} setRoute={setRoute} />
  } else {
    return (
      <Admin setRoute={setRoute} />
    )
  }

}

export default App;
