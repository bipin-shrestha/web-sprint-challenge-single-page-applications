import React from 'react';
import Styled from 'styled-components';

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
    return  (   
        <div className='topheader'> 
        <StyledHeader>   
          <div><h2>LAMBDA EATS</h2></div>
               
            <div>
            <button>HOME</button>
            <button>HELP</button>
            </div>
                    
        </StyledHeader>
    </div>
   
 

    )    
}
export default Header;