import styled from 'styled-components'

interface WrapperProps {
  isOpen: boolean
}

export const SearchBar = styled.input`
  border: none;
  font-size: 22px;
  font-weight: 590;
  color: ${({ theme }) => theme.darkBlue};
  background-color: ${({ theme }) => theme.lightGray};
  width: 85%;
  ::placeholder{
    font-size: 20px;
    color: ${({ theme }) => theme.darkBlue};
  }
`

export const Wrapper = styled.div<WrapperProps>`
  border-radius: 50px;
  width: 300px;
  height: 40px;
  padding: 0 20px;
  border: 2px solid ${({ theme }) => theme.red};
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(5px 5px 10px #000);
  transition: 0.5s;
  position: fixed;
  bottom: ${({ isOpen }) => isOpen ? '100px' : '0px'};
  z-index: 5;
`
