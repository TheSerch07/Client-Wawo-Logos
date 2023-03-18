import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';

function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logo" element={<Form />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
