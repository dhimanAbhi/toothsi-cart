import Checkout from "./components/Checkout";
import Home from "./components/Home";
import './utils/stylesheets/styles.css'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/cart/checkout" element={ <Checkout/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
