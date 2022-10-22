import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header';
import Login from './login';
import PresentPortal from './PresentPortal';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={<PresentPortal />} />
          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
