import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="main">
        <Navigation />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
      <Footer />
      <BottomNav />
    </AuthProvider>
  );
}

export default App;
