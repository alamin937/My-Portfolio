import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
