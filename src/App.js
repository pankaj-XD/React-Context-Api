import React from 'react';
import './App.css';
import { useStateValue } from './StateProvider';



function App() {

  const [{user},dispatch] = useStateValue();


  const hangeChangeUser = user => {
    dispatch({
      type: "SET_USER",
      user
    })
  }

  console.log(user, ":CURRENT")

  return (
    <div className="App">
      <button onClick={()=> hangeChangeUser({name: 'aespa', email: 'aespa@gmail.com'}) } >Change User to aespa</button>
      <button onClick={()=> hangeChangeUser({name: 'jhonny', email: 'johnathan@gmail.com'}) } >Change User to jhonny</button>
      <button onClick={()=> hangeChangeUser({}) } >Set To Null</button>
    </div>
  );
}

export default App;
