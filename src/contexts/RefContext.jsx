import { createContext, useContext, useRef } from 'react'

const RefContext = createContext()

export function useRefContext() {
  return useContext(RefContext)
}

export function RefContextProvider({ children }) {
  const heroRef = useRef()
  const coupleRef = useRef()
  const eventRef = useRef()
  const giftRef = useRef()

  return (
    <RefContext.Provider
      value={{
        heroRef,
        coupleRef,
        eventRef,
        giftRef,
      }}
    >
      {children}
    </RefContext.Provider>
  )
}
