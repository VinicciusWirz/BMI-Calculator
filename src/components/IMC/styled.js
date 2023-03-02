import styled from "styled-components";

export const IMCWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const IMCCalc = styled.div`
width: 219px;
height: 68px;
display: flex;
justify-content: center;
align-items: center;
background: #f53a00;
border-radius: 5px;
color: #fff;
font-size: 19px;
font-weight: 700;
margin-bottom: 22px;
`;

export const ListRef = styled.li`
    display: flex;
    justify-content: space-between;
    height: 40px;
    background: ${props => props.highlight ? '#cdeae3' : '#fff'};
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        :nth-child(1){
            width: 90%;
        }
        :nth-child(3){
            width: 40%;
        }
        
    }
    :not(:first-child) span{
        border: 1px solid #eff5f4;
        border-top: 0px;
        :nth-child(2){
            border-left: 0px;
            border-right: 0px;
        }
    }
`;

export const Sheet = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
font-size: 19px;

li:nth-child(1){
    background: #28a684;
    color: #fff;
}
`;