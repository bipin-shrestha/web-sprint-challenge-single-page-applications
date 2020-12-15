import React, { useState, useEffect } from 'react';
import Header from './Header';
import * as yup from 'yup';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Styled from 'styled-components';

const StyledForm = Styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
  background-color: crimson;
  font-size: 20px;
  padding: 3%;
`

export default function Form(){
const [ formState, setformState ]= useState({
    customername: "",
    pizzaSize: "small",
    pepperoni: false,
    sausage: false,
    onions: false,
    pineapple: false,
    specialInstruction: ""
}); 
const [ errors, setErrors ]= useState({ 
    customername: "",
    pizzaSize: "",
    pepperoni: "",
    sausage: "",
    onions: "",
    pineapple: "",
    specialInstruction: ""
});
const [buttonDisabled, setButtonIsDisabled] = useState(true);
const formSchema = yup.object().shape({
    customername: yup.string().required("Cannot be empty").min(2,"Must be atleast 2 characters"),
    pizzaSize: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    specialInstruction: yup.string()
    
});

useEffect(()=>{
    formSchema.isValid(formState).then((valid)=>{
        console.log("is the form valid???", valid);
        setButtonIsDisabled(!valid);
    });
},[formState]);

const validate =(event) =>{
    yup
    .reach(formSchema, event.target.name)
    .validate(event.target.type === "checkbox" ? event.target.checked : event.target.value)
    .then((validate)=>{
        setErrors({ ...errors, [event.target.name]:""});
    })
    .catch((error)=>{
        setErrors({...errors,[event.target.name]:error.errors[0]});
    });
};
const inputChange = (event) => {
    event.persist();
    const newFormState = {
        ...formState,[event.target.name]:  
        event.target.type === 'checkbox' ? event.target.checked  : event.target.value
    };
    validate(event);
    console.log("this is the event", errors);
    setformState(newFormState);
};
const history = useHistory();
const formSubmit = (event) => {
    event.preventDefault();
    //console.log(formState);
    axios
    .post("https://reqres.in/api/users", formState)
    .then((response) => {
        console.log(response.data);
        history.push({
            pathname: "/confirmation",
            state: {data: response.data}
        });
    }) 
    .catch((error) => {
        console.log(error);
    })      
};


    return(
        <div>
            <Header/>
        <StyledForm>            
            <form onSubmit={formSubmit}>
                <label htmlFor="customername">
                    Customer Name :
                    <br/>
                    <input
                    id='customername'
                    type='text'
                    name='customername'
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {errors.customername.length > 0 ? <p>{errors.customername}</p>:null }
                </label>
                <br/>
                <label htmlFor="pizzaSize">
                    Pizza Size :  
                    <select
                        id='pizzaSize'
                        name='pizzaSize'
                        value={formState.pizzaSize}
                        onChange={inputChange}  
                        > 
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
                        checked={formState.pepperoni}
                        onChange={inputChange}
                    />
                </label>
                <br/>
                <label htmlFor='sausage'>
                    Sausage  -
                    <input
                        type='checkbox'
                        id='sausage'
                        name='sausage'
                        checked={formState.sausage}
                        onChange={inputChange}
                    />
                </label>
                <br/>
                <label htmlFor='onions'>
                    Onions  -
                    <input
                        type='checkbox'
                        id='onions'
                        name='onions'
                        checked={formState.onions}
                        onChange={inputChange}
                    />
                </label>
                <br/>
                <label htmlFor='pineapple'>
                    Pineapple  -
                    <input
                        type='checkbox'
                        id='pineapple'
                        name='pineapple'
                        checked={formState.pineapple}
                        onChange={inputChange}
                    />
                </label>
                <br/>
                <label htmlFor='specialInstruction'>
                If you have Special Instruction  :
                <br/>
                <textarea
                    id='specialInstruction'
                    name='specialInstruction'
                    value={formState.specialInstruction}
                    onChange={inputChange}
                    />
                </label>
                <br/>
                <button type='submit' disabled={buttonDisabled}>Place the Order</button>
              
            </form>
        </StyledForm>
        </div>
    );

};