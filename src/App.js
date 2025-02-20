import "./App.css";
import Body from "./Body";
 
import About from "./Components/About";
import Modal from "./Components/Modal";
import Footer from "./Footer";
import Header from "./Header";
 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/modal" element={<Modal/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
