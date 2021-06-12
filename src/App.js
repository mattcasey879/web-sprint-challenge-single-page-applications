import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import OrderForm from './OrderForm'

const App = () => {
  const initialFormValues = {
    name: '',
    size: '',
    special: '',
    pepperoni: false,
    bannana: false,
    onions: false,
    sausage: false,
    
}
const intialPizzaOrders = []
const [formValues, setFormVlaues] = useState(initialFormValues)
const [pizzaOrders, setPizzaOrders] = useState(intialPizzaOrders)

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
  setFormVlaues({...formValues, [name]: value})
}

const submit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: ['pepperoni, bannana, onions, sausage'].filter(topping => formValues[topping]),
    special: formValues.special.trim()
  }
  postPizza(newPizza)
}

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
          submit={submit}/>
        </Route>
        <Route path={'/'}>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
