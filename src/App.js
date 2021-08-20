import React from "react";
import { Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Header from './components/Header';
import OrderForm from "./components/OrderForm";
import Help from './components/Help';

const App = () => {


  return (
    <>
      <Header /> 

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <OrderForm />
      </Route>

      <Route path='/help'>
        <Help />
      </Route>

    </>
  );
};
export default App;
