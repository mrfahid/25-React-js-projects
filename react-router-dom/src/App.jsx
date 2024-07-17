import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout"
import { About, Contact, GitHub, Home, User} from "./components"
import './App.css'
import { githubLoader } from "./components/GitHub/GitHub"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route 
      loader={githubLoader}
      path="github"
      element={<GitHub />}
      />
    </Route>
  )
)

function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
