import './App.css';
import {Link,Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ReactQueryPage from './ReactQueryPage';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/' >Homepage</Link>
        <Link to='/react-query'>ReactQueryPage</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path='/react-query' element={<ReactQueryPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
