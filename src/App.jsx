import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar
        title="Text Editor"
        aboutText="About"
      />

      <div className="container my-3">
        <TextForm heading="Enter text Inside" />
      </div>



      {/* <About/> */}




    </>
  )
}

export default App
