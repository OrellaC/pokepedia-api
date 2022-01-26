import { useState, useContext } from "react";
import { Routes, Route } from 'react-router-dom'
//Components 
import Nav from "./components/Nav"
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import PokemonList from "./pages/PokemonList";
//Contexts
import UserContext from "./contexts/UserContext";
//Css
import './App.css'

const App = () => {
  //In order to use context, you must import first, then you can use the useContext hook to access our context
  // const user = useContext (UserContext)
  // console.log(user)

  //we will pass on our user to all of App's children via the provider value prop
  const [user, setUser] = useState('')

  return (
    <div className='App'>
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside inside our provider. */}
      <UserContext.Provider value={user}>
        <Nav />

        {/* We need to wrap all our routes inside react router Routes component  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          {/* The forward slash between pokemon and list matches the "to"/path on pokemon list on the nav index.js. Both names should match */}
          <Route path="pokemon/list" element={<PokemonList />} />
        </Routes>


      </UserContext.Provider>


    </div>
  );
}

export default App;

