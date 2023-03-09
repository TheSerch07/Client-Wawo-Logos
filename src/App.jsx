import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import CreateLogo from './components/CreateLogo'
import Tutorial from './components/Tutorial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <CreateLogo />
      <Tutorial />
    </div>
  )
}

export default App
