import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './pages/Service'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
