import React from 'react';
import Header from './Header';

export default function Confirmation(props){
    const data = props.location.state.data;
    return(
    <div>
        <Header/>
        Customer Name: {data.customername}<br/>
        Pizza Size: {data.pizzaSize}<br/>
        Toppings:
        <br/>
        {data.pepperoni?"Pepperoni,":""}{data.onions?"Onions,":""}{data.pineapple?"Pineapple,":""}{data.sausage?"Sausage":""}
        <br/>
        Special Instruction: {data.specialInstruction}
    </div>       
    )

}