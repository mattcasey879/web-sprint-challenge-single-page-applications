import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import OrderForm from './OrderForm'

import * as yup from 'yup'
import schema from './validation/schema';


const initialFormValues = {
    name: '',
    size: '',
    special: '',
    pepperoni: false,
    bannana: false,
    onions: false,
    sausage: false,
    
}
const initialFormErrors = {
  name: '',
  size: '',
}
const initialDisabled= []
const initialPizzaOrders = []
const App = () => {
const [formValues, setFormVlaues] = useState(initialFormValues)
const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrders)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const postPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setPizzaOrders([res.data, ...pizzaOrders])
  })
  .catch(err => console.log(err))
  .finally(() => {
    setFormVlaues(initialFormValues);
  })
}

const change = (name, value) => {
  validate(name, value)
  setFormVlaues({...formValues, [name]: value})
}

const submit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: ['pepperoni', 'bannana', 'onions', 'sausage'].filter(topping => formValues[topping]),
    special: formValues.special.trim()
  }
  postPizza(newPizza)
}
const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}
useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className= 'App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to='/'><button>Home</button></Link>
          <Link to='/pizza'><button id= 'order-pizza'>Order Pizza</button></Link>
        </div>
      </nav>
      <Switch> 
        <Route path={'/pizza'}>
          <OrderForm 
          values={formValues}
          change={change}
          submit={submit}
          disabled={disabled}
          errors={formErrors}/>
        </Route>
        <Route path={'/'}>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
