import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  margin-bottom: 1rem;
  > button {
    margin: 0 1rem;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    > button:focus {
      outline: none;
    }
  }
  @media only screen and (max-width: 892px) {
    > button {
      margin: 0 0.4rem;
    }
  }
`;

export const HighlightTag = styled.span`
  font-weight: 500;
  padding: 2px 4px;
  color: var(--primary);
  background: var(--lightPrimary);
`;

export const AlertTag = styled(HighlightTag)`
  color: var(--alert);
  background: var(--lightAlert);
`;

export const BasicTag = styled(HighlightTag)`
  color: var(--textTitle);
  background: var(--bgBrand);
`;

export const GoBack= styled.div`  
margin-top: 2rem ;
background-color: var(--primary) ;
color: white ;
border-radius: 1rem;
text-decoration: none ;
width: 8rem ;
text-align:center;
padding: 1rem;
text-decoration: none ;
font-size: large ;
color: white ;

&:hover {
  transform: translateY(-3px) ;
  box-shadow: 0 5px 10px rgba(0,0,0,0.7) ;
}

&:active{
  transform: translateY(0) ;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4) ; 
}` ;
