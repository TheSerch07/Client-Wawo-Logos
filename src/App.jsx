import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Forms from './components/Forms';

function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logo" element={<Forms />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
