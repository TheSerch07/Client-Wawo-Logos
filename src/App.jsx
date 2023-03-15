import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import CreateLogo from './components/CreateLogo'
import Tutorial from './components/Tutorial'
import TutorialTwo from './components/TutorialTwo'
import TutorialThree from './components/TutorialThree'
import Examples from './components/Examples'
import Obtains from './components/Obtains'

function App() {

  return (
    <div className="App">
      <Header />
      <CreateLogo />
      <Tutorial />
      <TutorialTwo />
      <TutorialThree />
      <Examples />
      <Obtains />
    </div>
  )
}

export default App
