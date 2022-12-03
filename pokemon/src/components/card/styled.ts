import styled from "styled-components";
import theme from "../../styles/theme";

interface imgProps{
    sprite: string;
}

export const Card = styled.div`
    width: 170px;
    background-color: ${({theme}) => theme.white};
    filter: drop-shadow(5px 5px 10px #000);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
` 
export const WrapperInfo = styled.div`
    width: 100%;
    padding: 10px 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${({theme}) => theme.darkBlue};
    bottom: 0;
`;

export const HeaderCard = styled.div`
    position: relative;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
`

export const WrapperStar = styled.div`
    position: absolute;
    top: 0px;
    right: 3px;
`;
