import { useContext } from "react";
//Components 
import Nav from "./components/Nav"
//Contexts
import UserContext from "./contexts/UserContext";
//Css
import './App.css'

function App() {
  //In order to use context, you must import first, then you can use the useContext hook to access our context
  // const user = useContext (UserContext)
  // console.log(user)

  return (
    <div className='App'>
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside inside our provider. */}
      <UserContext.Provider value={'Christina'}>
        <Nav />
      </UserContext.Provider>


    </div>
  );
}

export default App;

