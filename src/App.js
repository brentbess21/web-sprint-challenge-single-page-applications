import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import axios from "axios";

//components
import Home from './components/Home';
import Header from './components/Header';
import OrderForm from "./components/OrderForm";
import Help from './components/Help';
import Confirmation from "./components/Confirmation";

//initial values
const initialFormValues = {
  //text inputs
  name: '',
  email: '',
  size: '',
  special: '',

  // radio button
  sauce: '',

  //checkboxes
  pepperoni: false,
  sausage: false,
  chicken: false,
  ham: false,
  greenPeppers: false,
  olives: false,
  onions: false,
  mushrooms: false,
  extraCheese: false,
}

const initialErrors = {
  name: '',
  email: '',
  
}

const initialOrderItems = [];
const initialDisabled = false;

const App = () => {

  //state
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [orderItems, setOrderItems] = useState(initialOrderItems);
  
  //helper functions

  const getOderItems = () => {
    axios.get('https://reqres.in/api/orders')
      .then(response => {
        console.log(response.data);
      })
      .catch(err=> {
        console.error(err);
      })
  }

  const validate = () => {

  }

  const printOrderItem = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(response => {
        console.log(response);
      })
      .catch(err=> {
        console.error(err);
      })
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]:value})
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni','sausage','chicken','ham','greenPeppers','olives','onions','mushrooms','extraCheese']
        .filter(topping => !!formValues[topping])
    }
    console.log("You submitted the form!")
    console.log(newOrder)
    printOrderItem(newOrder);
    setFormValues(initialFormValues);
  }



  //side effects 

  // useEffect(()=>{
  //   getOderItems();
  // },[])


  return (
    <>
      <Header /> 

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pizza">
        <OrderForm formValues={formValues} errors={errors} inputChange={inputChange} submitForm={submitForm}/>
      </Route>

      <Route path='/help'>
        <Help />
      </Route>

      <Route path='/confirm'>
        <Confirmation />
      </Route>

    </>
  );
};
export default App;
