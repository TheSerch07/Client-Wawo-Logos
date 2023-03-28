import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Forms from './components/Forms';
import { useSelector } from 'react-redux';
import End from './components/End';

function App() {
  
  const formRedux = useSelector((state) => state.form)
  console.log(formRedux, "Funciona el estado?")

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logo" element={<Forms />} />
            <Route path='/formFinished' element={<End />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
