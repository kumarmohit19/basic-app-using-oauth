import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
