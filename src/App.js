import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
// import background from "./assets/images/background.jpg";

function App() {
  return (
    <div>
      <div className="main">
        <Navigation />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
