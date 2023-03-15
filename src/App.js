import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Company from "./pages/Company";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/about" element={<About />} />
            <Route path="/Product" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
