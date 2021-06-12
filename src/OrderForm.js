import React from 'react';


export default function OrderForm(props) {
 const { values, change, submit } = props

 const onSubmit = event => {
        event.preventDefault()
        submit()
 }

 const onChange = (event) => {
     const { name, value, checked, type } = event.target
     const valueToUse = type === 'checkbox' ? checked: value;
     change(name, valueToUse)
 }
    return (
        <div>
            <form onSubmit={onSubmit} id='pizza-form'>
                <label>
                <select name='size' value={values.size} onChange={onChange} id='size-dropdown'>
                    <option>Select size</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
            </label>
            <label>Pepperoni
             <input name='pepperoni'type='checkbox' checked={values.pepperoni} onChange={onChange}></input>
            </label>
            <label>Bannana Peppers
             <input name='bannana' type='checkbox' checked={values.bannana} onChange={onChange}></input>
            </label>
            <label>Onions
             <input name='onions' type='checkbox' checked={values.onions} onChange={onChange}></input>
            </label>
            <label>Sasuage(extra .75)
             <input name='sausage' type='checkbox' checked={values.sausage} onChange={onChange}></input>
            </label>
            <label>
                <input id='special-text' name='special' type='text' placeholder='Anything Special?' value={values.special} onChange={onChange}></input>
            </label>
            
            <button id='order-button'>Order Your Pizza!</button>

            </form>
        </div>
    )
}