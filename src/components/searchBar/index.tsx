import { FC, useCallback, useContext, useEffect, useRef, useState } from 'react'
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
  const [inputValue, setInputValue] = useState<boolean>(true)
  const inputRef = useRef<string>('')
  let buttonIsEnable: boolean = true
  const search = useCallback(() => {
    setIsFilter()
    setIsFavorite()
    handleSearch(inputRef.current.value)
    console.log(inputRef.current.value)
    onCloseSearch()
    inputRef.current.value = ''
  }, [])
  const handleChange = (e: any): void => {
    console.log(e.target.value)
    if (e.target.value.length < 3) {
      setInputValue(false)
    } else {
      setInputValue(true)
    } 
  }
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SearchBar placeholder='type a pokemon name...' ref={inputRef} onChange={handleChange} />
      <Button onClick={() => search()} width='auto' height='auto' buttonIsEnable={inputValue}>
        <Lupe size='25px' fill={theme.white} stroke={theme.darkBlue} />
      </Button>
    </S.Wrapper>
  )
}

export default SearchBar
