import styled from 'styled-components'

interface TextProps {
  fontSize: string
  bold: boolean
  color: string
  margin: string
}

export const Text = styled.p<TextProps>`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ bold }) => bold ? '700' : 'normal'};
    color: ${({ color }) => color};
    margin: ${({ margin }) => margin};
`
