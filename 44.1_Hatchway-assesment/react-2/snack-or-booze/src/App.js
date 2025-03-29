import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import SnackOrBoozeApi from "./Api";
import MenuItem from "./FoodItem";
import AddItemForm from "./AddItemForm";
import Navbar from "./NavBar";
import NotFound from "./NotFound";

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/snacks" render={() => <Menu type="snacks" />} />
        <Route exact path="/drinks" render={() => <Menu type="drinks" />} />
        <Route path="/snacks/:id" render={(props) => <MenuItem {...props} type="snacks" />} />
        <Route path="/drinks/:id" render={(props) => <MenuItem {...props} type="drinks" />} />
        <Route path="/add" component={AddItemForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
