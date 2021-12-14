import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SingleDataGetting from './pages/SingleDataGetting';

function App() {
  return (
    <div className="App">
     {
    //        wrapping the entire components inside routes
    }
       <Routes>
       <Route exact path ="/" element={<Home/>}/>
       <Route exact path ="/pages/SingleDataGetting/:id" element={<SingleDataGetting/>}/>
        </Routes>
    </div>
  );
}

export default App;
