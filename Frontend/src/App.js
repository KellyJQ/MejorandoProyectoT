import './App.css';
import Navbar from './components/Navbar'
import Home from './view/Home';
import  Productos from './view/Filtroproductos';
import { Route, Routes } from 'react-router';
import Contacts from './view/Contacts';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path ='/'element={<Home/>}/>
        <Route path='productos' element={<Productos/>}/>
        <Route path ='contacts'element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;

