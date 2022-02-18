import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Homepage/Homepage';
import NavigationBar from './Navbar/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
