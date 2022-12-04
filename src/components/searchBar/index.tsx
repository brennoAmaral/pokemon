import { FC, useCallback, useRef, useState } from 'react'
import Lupe from '../../assets/svg/lupe'
import theme from '../../styles/theme'
import * as S from './styled'
import Button from '../button'

const SearchBar: FC = (props) => {
  const inputRef = useRef<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [inputSearch, setInputSearch] = useState<string>('')
  const handleSearch = useCallback(() => {
    setInputSearch(inputRef.current.value)
  }, [])
  const handleSearchBar = useCallback((value: boolean): void => {
    if (!value) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [])
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SearchBar placeholder='enter a pokemons name' ref={inputRef} />
      <Button onClick={() => handleSearch()} width='auto' height='auto'>
        <Lupe size='25px' fill={theme.darkBlue} stroke={theme.darkBlue} />
      </Button>
    </S.Wrapper>
  )
}

export default SearchBar
