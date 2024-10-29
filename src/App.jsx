import Main from './layouts/Main'
import { RefContextProvider } from './contexts/RefContext'

function App() {
  return (
    <RefContextProvider>
      <Main />
    </RefContextProvider>
  )
}

export default App
