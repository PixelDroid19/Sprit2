import styled from 'styled-components'

//Box Main
export const Form = styled.form`
 width: 300px;
    color:white;
    padding: 10px;
    margin-top: 50px;border-radius: 5px;
    background-color:rgba(27, 33, 47, 0.445);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const AppBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;


export const Input = styled.input`
    background-color:transparent;
    border: none;
    color: white;
    border-bottom: 2px solid rgb(124, 0, 146);
    outline: none;
    width: 100%;
    padding: 5px;

    &input:focus{
    border-bottom: 2px solid rgb(188, 0, 221);
}
`;


export const BtnE = styled.button`
    margin-top: 10px;
    font-weight: bold;
    border-radius: 3px;
    padding: 10px;
    font-size:16px;
    background-color:rgba(252, 119, 95, 0.794);
    border: none;
    width: 100%;
    padding: 8px;

    &:hover{
     cursor: pointer;
     background-color:#ba4d52;
}
`;

export const FormLogo = styled.div`
   color: white;
    text-align: center;
`;

export const LinkCustom = styled.div`
    display:grid;
    text-align: center;
    

    .Link{
      color:white;
      text-decoration: none;  
    }

    .Link:hover{
        color:#45414e;
    }
    
`;
