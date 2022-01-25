//import createContext

import React, { createContext } from 'react'


//simplest way to create a context is by creating a variable similar to the name of the file
//Standard Practice: Name your context the same as your file
//useContext is just a different way of passing on data 

const UserContext = createContext(null)

export default UserContext 