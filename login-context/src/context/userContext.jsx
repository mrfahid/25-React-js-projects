import React from 'react'

const userContext = React.createContext()

export const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState(null)

  return (
    <userContext.Provider value={{user, setUser}}>
      {children}
    </userContext.Provider>
  )
}

export const useUser = () => {
  return React.useContext(userContext)
}