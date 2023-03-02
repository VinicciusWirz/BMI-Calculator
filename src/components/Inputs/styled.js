import styled from "styled-components";

export const Header = styled.header`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
font-weight: 700;
color: #f53b00;
/* margin-bottom: 65px; */
`;

export const InputsWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0px 70px;
margin-bottom: 10px;
input{
    width: 270px;
    height: 53px;
    border-radius: 5px;
    border: 2px solid lightgray;
    padding: 0 7px;
    margin-top: 10px;
    font-size: 14px;
}
`;

export const InputContent = styled.div`
display: flex;
flex-direction: column;
p{
    color: #26a582;
    font-size: 23px;
    font-weight: 700;
}
`;

export const ButtonWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0px 70px;
button{
    width: 270px;
    color: #26a582;
    border: 2px solid #26a582;
    border-radius: 5px;
    background: #fff;
    font-weight: 700;
    font-size: 23px;
    height: 53px;
}
`;