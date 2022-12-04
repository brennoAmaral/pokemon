import styled from 'styled-components'

interface WrapperProps {
  background: string
}
export const Wrapper = styled.div<WrapperProps>`
  width: 100px;
  height: 100px;
  background-color: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 15px;
`
