import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Layout/Navbar";
import Cotacao from "./pages/Cotacao/Cotacao";
import Container from "./components/Layout/Container";
import Footer from "./components/Layout/Footer";
import NovaCotacao from "./pages/NovaCotacao/NovaCotacao";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/novacotacao' element={<NovaCotacao />} />
          <Route path="/cotacao" element={<Cotacao />} />
          <Route path="/cotacao/:id" element={<Cotacao />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
