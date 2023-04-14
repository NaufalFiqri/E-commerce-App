import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books.jsx";
import { books } from "./data";


function App() {
  return (
    <Router>
    <div className="App">
      <Route />
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" render={() => <Books books={books} />} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
