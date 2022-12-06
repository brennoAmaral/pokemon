import { FC, useCallback, useContext, useRef } from 'react'
import Lupe from '../../assets/svg/lupe'
import theme from '../../styles/theme'
import * as S from './styled'
import Button from '../button'
import { PokemonSetupContext } from '../../context/PokemonSetupProvider'
interface SearchBarProps {
  isOpen: boolean
  onCloseSearch: () => void
  setIsFilter: () => void
  setIsFavorite: () => void
}
const SearchBar: FC<SearchBarProps> = (props) => {
  const { isOpen, onCloseSearch, setIsFilter, setIsFavorite } = props
  const { handleSearch } = useContext(PokemonSetupContext)
  const inputRef = useRef<string>('')
  const search = useCallback(() => {
    setIsFilter()
    setIsFavorite()
    handleSearch(inputRef.current.value)
    console.log(inputRef.current.value)
    onCloseSearch()
    inputRef.current.value = ''
  }, [])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SearchBar placeholder='type a pokemon name...' ref={inputRef} />
      <Button onClick={() => search()} width='auto' height='auto'>
        <Lupe size='25px' fill={theme.white} stroke={theme.darkBlue} />
      </Button>
    </S.Wrapper>
  )
}

export default SearchBar
