import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./common/header";
import Footer from "./common/footer";
import ImageSlider from "./common/ImageSlider";

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <ImageSlider />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
