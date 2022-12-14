import styled from 'styled-components'

interface ButtonProps {
  width: string
  height: string
  border: boolean
  background: string
  rounded: boolean
  margin: string
}

export const Button = styled.button<ButtonProps>`
  border-color: #62e093;
  border-width: 4px;
  border-style: ${({ border }) => (border ? 'solid' : 'none')};
  border-radius: ${({ rounded }) => (rounded ? '100%' : '15px')};
  background-color: ${({ background }) => background};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin}
`
