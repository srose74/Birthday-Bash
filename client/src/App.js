import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header';
import Login from './login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
