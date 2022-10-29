import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header';
import Login from './login';
import PresentPortal from './PresentPortal';
import GiveGift from './GiveGift';
import AddEvent from './AddEvent';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={<PresentPortal />} />
            <Route path="give-gift/:relationship_id/:event_id" element={<GiveGift />} />
            <Route path="/event/:relationship_id/:name" element={<AddEvent />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
