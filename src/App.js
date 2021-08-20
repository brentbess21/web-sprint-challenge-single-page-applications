import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import axios from "axios";

import schema from './validation/formSchema';
import * as yup from 'yup';

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
  size:'',
  sauce: '',
  
}

const initialOrderItems = [];
const initialDisabled = true;

const App = () => {

  //state
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [orderItems, setOrderItems] = useState(initialOrderItems);
  const [disabled, setDisabled] = useState(initialDisabled);
  
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

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then( () => setErrors({...errors,[name]: ""}))
      .catch( err => setErrors({...errors, [name]:err.errors[0]}))
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
    validate(name, value);
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

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

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
        <OrderForm formValues={formValues} errors={errors} disabled={disabled} inputChange={inputChange} submitForm={submitForm}/>
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
