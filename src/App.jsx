import { useState } from 'react'
import './App.css'
import { Card } from "./assets/Components/Card.jsx";
import { Nav } from "./assets/Components/Nav.jsx";

function App() {

  return (
    <div className='all-content'>
      <Nav />
      <div className='cards-container'>
        <Card />
      </div>

    </div>
  )
}

export default App
