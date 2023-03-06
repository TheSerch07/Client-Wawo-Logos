import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import CreateLogo from './components/CreateLogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <CreateLogo />
    </div>
  )
}

export default App
