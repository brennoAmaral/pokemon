import { FC } from 'react'
import theme from '../../styles/theme'
import * as S from './styled'

interface TextProps {
  children: string
  fontSize?: '15px' | '20px' | '25px' | '30px' | string
  bold?: boolean
  color?: string
  margin?: string
}

const Text: FC<TextProps> = (props) => {
  const {
    children,
    fontSize = '20px',
    bold = false,
    color = `${theme.darkBlue}`,
    margin = '0'
  } = props

  return (
        <S.Text
            fontSize={fontSize}
            bold={bold}
            color={color}
            margin={margin}
        >
            {children}
        </S.Text>
  )
}

export default Text
