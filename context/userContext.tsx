import React, { FC, ReactElement, useState } from "react"

const UserContext = React.createContext([{}, () => {}])

let initialState = {}

const UserProvider: FC<{children: ReactElement}> = ({children}) => {
  const [state, setState] = useState(initialState)

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }