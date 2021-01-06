import React from 'react';
import Styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const StyledHeader = Styled.div`
font-size: 20px;
padding: 5px 15px;
margin: 10px 0px;
font-weight: bold;
display: flex;
flex-direction: row;
justify-content: space-between;
`

function Header() {
    const history = useHistory();
    return  (   
        <div className='topheader'> 
        <StyledHeader>   
          <div><h2>LAMBDA EATS</h2></div>
               
            <div>
            <button onClick={()=>history.push('/')}>HOME</button>
            <button>HELP</button>
            </div>
                    
        </StyledHeader>
    </div>
   
 

    )    
}
export default Header;