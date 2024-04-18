import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Form from "./Form";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
      </Router> */}
      {/* <div className="content">
        <h1>Homepage</h1>
        <Card
          title="Sample Card"
          image="https://via.placeholder.com/150"
          description="This is a sample card component."
        />
        <Form />
      </div> */}
      <HomePage />
    </div>
  );
}
