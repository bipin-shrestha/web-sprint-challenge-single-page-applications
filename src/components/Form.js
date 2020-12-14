import React, {useState} from 'react';
import Header from './Header';


export default function Form(){
 


    return(
        <div>
            <Header/>
            <form>
                <label htmlFor="customername">
                    Customer Name :
                    <br/>
                    <input
                    id='customername'
                    type='text'
                    name='customername'
                    />
                </label>
                <br/>
                <label htmlFor="pizzaSize">
                    Pizza Size :  
                    <select
                        id='pizzaSize'
                        name='pizzaSize'>
                         <option value='small'>Small</option>
                         <option value='medium'>Medium</option>
                         <option value='large'>Large</option>
                    </select>
                     <br/>
                </label>
                <label htmlFor='pepperoni'>
                    Pepperoni  -
                    <input
                        type='checkbox'
                        id='pepperoni'
                        name='pepperoni'
                    />
                </label>
                <br/>
                <label htmlFor='sausage'>
                    Sausage  -
                    <input
                        type='checkbox'
                        id='sausage'
                        name='sausage'
                    />
                </label>
                <br/>
                <label htmlFor='onions'>
                    Onions  -
                    <input
                        type='checkbox'
                        id='onions'
                        name='onions'
                    />
                </label>
                <br/>
                <label htmlFor='pineapple'>
                    Pineapple  -
                    <input
                        type='checkbox'
                        id='pineapple'
                        name='pineapple'
                    />
                </label>
                <br/>
                <label htmlFor='specialInstruction'>
                If you have Special Instruction  :
                <br/>
                <textarea
                    id='specialInstruction'
                    name='specialInstruction'
                    />
                </label>
                <br/>
                <button type='submit'>Place the Order</button>

            </form>

        </div>

    )

}