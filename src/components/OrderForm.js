import React from 'react';
import { Link } from 'react-router-dom';

//components
import Order from './Order';

const OrderForm = (props) => {

    const { formValues, errors, inputChange, submitForm, disabled, orderItem } = props;

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked: value;
        inputChange(name, valueToUse);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submitForm();
    }

    return (
        <div>
            <h1>This is the order form</h1>
            <div className='errors'>
                <div>{errors.name}</div>
            </div>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div className='form-sub-heading'>
                    <h3>Personal Info</h3>
                    <label> Name: 
                        <input 
                            type='text'
                            name='name'
                            id='name-input'
                            value={formValues.name}
                            placeholder="Enter your Name"
                            onChange={onChange}
                        />
                    </label>

                    <label> Email: 
                        <input 
                            type='email'
                            name='email'
                            value={formValues.email}
                            placeholder='Enter your Email'
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='form-sub-heading'>
                    <h3>Choose a Size</h3>
                    <label>
                        <select id='size-dropdown' name='size' value={formValues.size} onChange={onChange}>
                            <option value=''>-- Choose a Size --</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Xtra Large">Xtra Large</option>
                        </select>
                    </label>
                </div>

                {/* RADIO BUTTONS */}
                <div className='form-sub-heading'>
                    <h3>Choose a Sauce</h3>
                    <label> Original Red
                        <input 
                            type='radio'
                            name='sauce'
                            value='originalRed'
                            onChange={onChange}
                            checked={formValues.sauce === 'originalRed'}
                        />
                    </label>

                    <label> Spicy Red
                        <input 
                            type='radio'
                            name='sauce'
                            value='spicyRed'
                            onChange={onChange}
                            checked={formValues.sauce === 'spicyRed'}
                        />
                    </label>

                    <label> BBQ
                        <input 
                            type='radio'
                            name='sauce'
                            value='bbq'
                            onChange={onChange}
                            checked={formValues.sauce === 'bbq'}
                        />
                    </label>

                    <label> Alfredo
                        <input 
                            type='radio'
                            name='sauce'
                            value='alfredo'
                            onChange={onChange}
                            checked={formValues.sauce === 'alfredo'}
                        />
                    </label>
                </div>

                {/* CHECKBOXES */}
                <div className='form-sub-heading'>
                    <h3>Choose Toppings</h3>

                    <label> Pepperoni 
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={formValues.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label> Sausage 
                        <input 
                            type='checkbox'
                            name='sausage'
                            checked={formValues.sausage}
                            onChange={onChange}
                        />
                    </label>

                    <label> Chicken 
                        <input 
                            type='checkbox'
                            name='chicken'
                            checked={formValues.chicken}
                            onChange={onChange}
                        />
                    </label>

                    <label> Ham 
                        <input 
                            type='checkbox'
                            name='ham'
                            checked={formValues.ham}
                            onChange={onChange}
                        />
                    </label>

                    <label> Green Peppers 
                        <input 
                            type='checkbox'
                            name='greenPeppers'
                            checked={formValues.greenPeppers}
                            onChange={onChange}
                        />
                    </label>

                    <label> Olives 
                        <input 
                            type='checkbox'
                            name='olives'
                            checked={formValues.olives}
                            onChange={onChange}
                        />
                    </label>

                    <label> Onions 
                        <input 
                            type='checkbox'
                            name='onions'
                            checked={formValues.onions}
                            onChange={onChange}
                        />
                    </label>

                    <label> Mushrooms 
                        <input 
                            type='checkbox'
                            name='mushrooms'
                            checked={formValues.mushrooms}
                            onChange={onChange}
                        />
                    </label>

                    <label> Extra Cheese
                        <input 
                            type='checkbox'
                            name='extraCheese'
                            checked={formValues.extraCheese}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='form-sub-heading'>
                    <h3>Special Instructions</h3>
                    <label>
                        <input
                            id='special-text'
                            type='text'
                            name='special'
                            value={formValues.special}
                            onChange={onChange}
                            placeholder='List any special instructions here'
                        />
                    </label>

                    <Link to='/confirm'>
                        <button id='order-button' disabled={disabled} onClick={onSubmit}>Add to Order</button>
                    </Link>
                </div>
                
                <Order orderItem={orderItem}  />

            </form>

        
        </div>
    )
}

export default OrderForm;