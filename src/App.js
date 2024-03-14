import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import MainFile from './components/MainFile';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/joke' element={<MainFile/>}/>
     </Routes>
     </BrowserRouter>
     {/* <Error/> */}
    </div>
  );
}

export default App;
