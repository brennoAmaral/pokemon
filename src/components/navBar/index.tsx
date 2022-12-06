import { FC, useCallback, useContext } from 'react'
import * as S from './styled'
import Filter from '../../assets/svg/filter'
import Lupe from '../../assets/svg/lupe'
import Star from '../../assets/svg/star'
import theme from '../../styles/theme'
import Text from '../text'
import Button from '../button'
import { PokemonSetupContext } from '../../context/PokemonSetupProvider'

interface NavBarProps {
  openFilter: () => void
  openSearch: () => void
  openFavorites: () => void
  setIsFavorite: () => void
  setIsSearch: () => void
  showFavorites: boolean
  isFilter: boolean
  isSearch: boolean
}

const NavBar: FC<NavBarProps> = (props) => {
  const { openFilter, openSearch, openFavorites, showFavorites, isFilter, isSearch, setIsFavorite, setIsSearch } = props
  const { resetPokemons } = useContext(PokemonSetupContext)

  const buttonFilterRender = useCallback(() => {
    if (isFilter) {
      return (
        <Button height='none' onClick={openFilter}>
          <S.WrapperChildrenButton>
            <Filter fill={theme.white} stroke={theme.darkBlue}/>
            <Text color={theme.white} fontSize='15px'>
              Filter
            </Text>
          </S.WrapperChildrenButton>
        </Button>
      )
    } else {
      return (
        <Button height='none' onClick={() => resetPokemons()}>
          <S.WrapperChildrenButton>
            <Filter fill={theme.white} stroke={theme.white}/>
            <Text color={theme.white} fontSize='15px'>
              Filter
            </Text>
          </S.WrapperChildrenButton>
        </Button>
      )
    }
  }, [isFilter])

  const handleFavorite = (): void => {
    setIsFavorite()
    resetPokemons()
  }
  const buttonFavoriteRender = useCallback(() => {
    if (showFavorites) {
      return (
      <Button height='none' onClick={() => openFavorites()}>
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
      <Button height='none' onClick={() => handleFavorite()}>
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

  const buttonSearchRender = useCallback(() => {
    if (!isSearch) {
      return (
        <Button height='none' onClick={openSearch}>
        <S.WrapperChildrenButton>
          <Lupe stroke={theme.white} />
          <Text color={theme.white} fontSize='15px'>
            Search
          </Text>
        </S.WrapperChildrenButton>
      </Button>
      )
    } else {
      return (
        <Button height='none' onClick={() => setIsSearch()}>
        <S.WrapperChildrenButton>
          <Lupe stroke={theme.white} />
          <Text color={theme.white} fontSize='15px'>
            Search
          </Text>
        </S.WrapperChildrenButton>
      </Button>
      )
    }
  }, [isSearch])

  return (
    <S.NavBar>
      <S.WrapperButton>
        {buttonFilterRender()}
        {buttonFavoriteRender()}
        {buttonSearchRender()}
      </S.WrapperButton>
    </S.NavBar>
  )
}

export default NavBar
