import Quiz from './components/Quiz'
import Result from './components/Result'
import Start from './components/Start'
import { DataProvider } from './context/Data-context'

function App() {
  

  return (
    <DataProvider>
     <Start />
     <Quiz />
     <Result />
    </DataProvider>
  )
}

export default App
