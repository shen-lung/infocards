import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
  // Create app context to create comunication between components.
  // Is used to control the states
  const [userList, setUserList] = useState([])
  const [userListCopy, setUserListCopy] = useState([])

  function setUserListContext(value) {
    setUserList(value)
  }
  
  return (
    <AppContext.Provider
      value={{
        setUserListContext,
        setUserListCopy,
        userListCopy,
        userList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
