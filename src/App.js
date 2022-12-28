import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SIngleMoviePage from "./pages/SIngleMoviePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:movie_id" element={<SIngleMoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
