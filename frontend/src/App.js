import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Admin from './Views/Admin';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false)


  if (!isAuth) {
    return (
      < Home isAuth={isAuth} setIsAuth={setIsAuth} />
    )
  } else {
    return (
      <Admin />
    )
  }

}

export default App;
