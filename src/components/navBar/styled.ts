import styled from 'styled-components'

export const NavBar = styled.nav`
    width: 100%;
    padding: 10px 0px; 
    background-color: ${({ theme }) => theme.darkBlue};
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-top: 10px;
    border-top: 2px solid ${({ theme }) => theme.red};

`

export const WrapperButton = styled.div`
    width: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const WrapperChildrenButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
