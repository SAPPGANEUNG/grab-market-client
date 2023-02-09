import './App.css';
import MainPageComponent from "./main/index.js";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons'
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div id = "header">
        <div id = "head-area">
          <Link to="/"><img id = "header-img" src="/images/icons/logo.png" /></Link>
          <Button size="large"
          onClick={function(){
            navigate('/upload');
          }}
          icon={<DownloadOutlined></DownloadOutlined>}>
          상품 업로드
          </Button>
      </div>
      </div>
      <div id = "body">
      <Routes>
      <Route path="/" element={<MainPageComponent/>} >
      </Route>
      <Route path="/upload" element={<UploadPage/>}>
      </Route>
      <Route path="/products/:id" element={<ProductPage/>}>
      </Route>
      </Routes>
    </div>
    <div id="footer"></div>
    </div>
)   
};
export default App;
