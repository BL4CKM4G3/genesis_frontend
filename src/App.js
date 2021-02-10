
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './components/organisms/header/header';
import './index.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>

        <Routes />
      </Router>
    </div>
  );
}

export default App;
