import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import CreateLogo from './components/CreateLogo'
import Tutorial from './components/Tutorial'
import TutorialTwo from './components/TutorialTwo'
import TutorialThree from './components/TutorialThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <CreateLogo />
      <Tutorial />
      <TutorialTwo />
      <TutorialThree />
    </div>
  )
}

export default App
