import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Search from './Components/Search';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1 className="text-white m-5">AB URL Shortner</h1>
      <Router>
        <Search />
      </Router>
    </div>
  );
}

export default App;
