import './App.css';
import Home from './Components/Home';
import Liked from './Components/Liked';
import Search from './Components/Search';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </Router>
  );
}

export default App;
