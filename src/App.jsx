import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import HomePage from "./pages/HomePage";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
