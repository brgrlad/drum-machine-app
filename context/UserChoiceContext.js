import  { createContext, useState} from 'react';

export const UserChoiceContext = createContext()

export const UserChoiceProvider = ({children}) => {
    const [userSelection, setUserSelection] = useState("something");
  return (
    <UserChoiceContext.Provider value={{userSelection,setUserSelection}}>
        {children}
    </UserChoiceContext.Provider>
  )
}

