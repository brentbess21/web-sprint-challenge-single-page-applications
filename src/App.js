import React from "react";
import { Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Header from './components/Header';
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <>
      <Header /> 
      <h1>App Componenet</h1>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <OrderForm />
      </Route>

    </>
  );
};
export default App;
