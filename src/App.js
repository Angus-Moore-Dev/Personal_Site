import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Homepage/Homepage';
import NavigationBar from './Navbar/NavigationBar';
import Projects from './Projects/Projects';
import HireMe from './HireMe/HireMe';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/HireMe' element={<HireMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
