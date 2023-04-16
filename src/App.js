import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Books from "./pages/Books.jsx";
import BookInfo from "./pages/BookInfo.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Route />
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
