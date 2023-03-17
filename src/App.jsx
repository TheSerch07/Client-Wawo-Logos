import './App.css'
import Header from './components/Header'
import CreateLogo from './components/CreateLogo'
import Tutorial from './components/Tutorial'
import TutorialTwo from './components/TutorialTwo'
import TutorialThree from './components/TutorialThree'
import Examples from './components/Examples'
import Obtains from './components/Obtains'
import CallToAction from './components/CallToAction'

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
      <CallToAction />
    </div>
  )
}

export default App
