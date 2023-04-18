import AddQuote from "./components/Misc/AddQuote";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const quotes = useSelector((state) => state.quotes.quotes);
 
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Link to="/" className="navbar">Home</Link>
          <Link to="/bookmarks" className="navbar">Bookmarks</Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<AddQuote />}></Route>
        <Route exact path="/bookmarks" element={<Bookmarks bookmarks={quotes} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
