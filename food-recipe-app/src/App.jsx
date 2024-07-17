
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components'
import { Details, Favorites, Home } from './pages'

function App() {
  

  return (
    <>
     <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
     </div>
    </>
  )
}

export default App
