import { FC, useCallback, useRef, useState } from 'react'
import Lupe from '../../assets/svg/lupe'
import theme from '../../styles/theme'
import * as S from './styled'
import Button from '../button'
interface SearchBarProps {
  isOpen: boolean
  onCloseSearch: () => void
}
const SearchBar: FC<SearchBarProps> = (props) => {
  const { isOpen, onCloseSearch } = props
  const inputRef = useRef<string>('')
  const [inputSearch, setInputSearch] = useState<string>('')
  const handleSearch = useCallback(() => {
    setInputSearch(inputRef.current.value)
    console.log(inputRef.current.value)
    onCloseSearch()
    inputRef.current.value = ''
  }, [])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.SearchBar placeholder='pokemon name...' ref={inputRef} />
      <Button onClick={() => handleSearch()} width='auto' height='auto'>
        <Lupe size='25px' fill={theme.darkBlue} stroke={theme.darkBlue} />
      </Button>
    </S.Wrapper>
  )
}

export default SearchBar
