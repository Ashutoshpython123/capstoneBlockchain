import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home/Home'
import './App.css';


function App() {
  return (
    <Router>
        <div className="darker">
  
        <Route path="/" exact component={Home} />
    </div>

    </Router>
  );
}

export default App;
