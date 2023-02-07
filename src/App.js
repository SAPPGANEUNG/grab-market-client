import './App.css';
import MainPageComponent from "./main/index.js";
import { Routes, Route } from 'react-router-dom';
import UploadPage from './upload'
import ProductPage from './product'

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<MainPageComponent/>} >
      </Route>
      <Route path="/upload" element={<UploadPage/>}>
      </Route>
      <Route path="/products/:id" element={<ProductPage/>}>
      </Route>
      </Routes>
    </div>
) 
};
export default App;
