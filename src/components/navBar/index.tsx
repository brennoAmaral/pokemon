import { FC, useCallback } from 'react'
import * as S from './styled'
import Filter from '../../assets/svg/filter'
import Lupe from '../../assets/svg/lupe'
import Star from '../../assets/svg/star'
import theme from '../../styles/theme'
import Text from '../text'
import Button from '../button'
import { flushSync } from 'react-dom'

interface NavBarProps {
  onFilter: () => void
  onOpenSearch: () => void
  onFavorites: () => void
  showFavorites: boolean
}

const NavBar: FC<NavBarProps> = (props) => {
  const { onFilter, onOpenSearch, onFavorites, showFavorites } = props
  console.log(showFavorites)
  const buttonRender = useCallback(() => {
    if (showFavorites) {
      return (
      <Button height='none' onClick={() => onFavorites()}>
        <S.WrapperChildrenButton>
          <Star size={31} stroke={theme.white} fill={theme.darkBlue} />
          <Text color={theme.white} fontSize='15px'>
            Favorites
          </Text>
        </S.WrapperChildrenButton>
      </Button>
      )
    } else {
      return (
      <Button height='none' onClick={() => onFavorites()}>
        <S.WrapperChildrenButton>
          <Star size={31} stroke={theme.white} fill={theme.white} />
          <Text color={theme.white} fontSize='15px'>
            Favorites
          </Text>
        </S.WrapperChildrenButton>
      </Button>
      )
    }
  }, [showFavorites])

  return (
    <S.NavBar>
      <S.WrapperButton>
        <Button height='none' onClick={onFilter}>
          <S.WrapperChildrenButton>
            <Filter />
            <Text color={theme.white} fontSize='15px'>
              Filter
            </Text>
          </S.WrapperChildrenButton>
        </Button>
        {buttonRender()}
        <Button height='none' onClick={onOpenSearch}>
          <S.WrapperChildrenButton>
            <Lupe />
            <Text color={theme.white} fontSize='15px'>
              Search
            </Text>
          </S.WrapperChildrenButton>
        </Button>
      </S.WrapperButton>
    </S.NavBar>
  )
}

export default NavBar
