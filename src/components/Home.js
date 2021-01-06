import React from 'react';
import Header from './Header';
import Styled from 'styled-components';
import {useHistory} from 'react-router-dom';


export default function Home(){
    const StyledDiv = Styled.div`
    display: flex;
    background-color: crimson;
    height: 300px;
    justify-content: center;
    align-item: center;
    `
    const StyledButton = Styled.button`
    margin: auto;
    height :30px;
    `

    const history = useHistory(); 
    return(
        <div>
        <Header/>
        <StyledDiv>
         <StyledButton onClick={()=>history.push('/pizza')}>Pizza ?</StyledButton>

        </StyledDiv>

        </div>
    )

}