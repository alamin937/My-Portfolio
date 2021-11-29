import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
