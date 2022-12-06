import Card from './components/card'
import { useCallback, useContext, useEffect, useState } from 'react'
import Header from './components/header'
import NavBar from './components/navBar'
import * as S from './style'
import Modal from './components/modal'
import { PokemonSetupContext } from './context/PokemonSetupProvider'
import SearchBar from './components/searchBar'
import Text from './components/text'
import Button from './components/button'
import Star from './assets/svg/star'
import theme from './styles/theme'
import ElementType from './assets/svg/elementType'
import getPokemons from './services/getPokemons'

function App (): JSX.Element {
  const { pokemons, setPokemons } = useContext(PokemonSetupContext)
  const [modal, setModal] = useState<boolean>(false)
  const [arrPosition, setArrPosition] = useState<number>(0)
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(true)
  const modalConstructure = useCallback((isFilter: boolean, name: string, sprite: string, id: number, type: string, hp: number, attack: number, especialAttack: number, defense: number, especialDefense: number, speed: number, weight: number): JSX.Element => {
    if (isFilter) {
      return (
        <S.WrapperElements>
          <Button onClick={() => console.log('filter')} width='auto' height='auto'>
            <>
              <ElementType elementType='fire' background={theme.red} />
              <Text fontSize='25px'>
                fire
              </Text>
            </>
          </Button>
          <Button onClick={() => console.log('filter')} width='auto' height='auto'>
            <>
              <ElementType background='#808080' />
              <Text fontSize='25px'>
                flying
              </Text>
            </>
          </Button>
        </S.WrapperElements>
      )
    } else {
      return (
        <>
          <S.HeaderModal>
            <Text fontSize='40px' bold margin='2px 0 0 0'>
              {name}
            </Text>
            <S.WrapperStar>
              <Button onClick={() => console.log(`${name} favoritado com sucesso`)} height='auto'>
                <Star fill={theme.yellow} size={35} />
              </Button>
            </S.WrapperStar>
          </S.HeaderModal>
          <img src={sprite} height={'200px'} width={'200px'} />
          <S.WrapperText>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`ID: ${id}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Type: ${type}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`HP: ${hp}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Attack: ${attack}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Special Attack: ${especialAttack}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Defense: ${defense}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Special Defense: ${especialDefense}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`speed: ${speed}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Weight: ${weight}`}
            </Text>
          </S.WrapperText>
        </>
      )
    }
  }, [])

  const handlerModal = (valueModal: boolean, position: number): void => {
    setModal(valueModal)
    setArrPosition(position)
    setIsFilter(false)
  }
  const handleFilter = (valueModal: boolean, isFilter: boolean): void => {
    setModal(valueModal)
    setIsFilter(isFilter)
  }
  const handleFavorites = (): void => {
    if (isFavorite) {
      setPokemons(JSON.parse(localStorage.getItem('favorites')))
      setIsFavorite(false)
    } else {
      getPokemons().then((result) => {
        setPokemons(result)
      }).catch((error) => {
        console.log(error)
      })
      setIsFavorite(true)
    }
  }

  const renderPoke = useCallback((pokemons: any) => {
    return pokemons.map((pokemon: any, index: number) => {
      return (
        <Card
          name={pokemon.data?.name}
          id={pokemon.data?.id}
          sprite={pokemon.data?.sprites.front_default}
          type={pokemon.data?.types[0].type.name}
          onClick={() => handlerModal(true, index)}
          hp={pokemons[arrPosition].data?.stats[0].base_stat}
          attack={pokemons[arrPosition].data?.stats[1].base_stat}
          especialAttack={pokemons[arrPosition].data?.stats[3].base_stat}
          defense={pokemons[arrPosition].data?.stats[2].base_stat}
          especialDefense={pokemons[arrPosition].data?.stats[4].base_stat}
          speed={pokemons[arrPosition].data?.stats[5].base_stat}
          weight={pokemons[arrPosition].data?.weight}
          key={pokemon.data?.name}
        />
      )
    })
  }, [pokemons])

  const renderModal = useCallback(() => {
    return (
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        name={pokemons[arrPosition].data?.name}
      >
        {modalConstructure(
          isFilter,
          pokemons[arrPosition].data?.name,
          pokemons[arrPosition].data?.sprites.front_default,
          pokemons[arrPosition].data?.id,
          pokemons[arrPosition].data?.types[0].type.name,
          pokemons[arrPosition].data?.stats[0].base_stat,
          pokemons[arrPosition].data?.stats[1].base_stat,
          pokemons[arrPosition].data?.stats[3].base_stat,
          pokemons[arrPosition].data?.stats[2].base_stat,
          pokemons[arrPosition].data?.stats[4].base_stat,
          pokemons[arrPosition].data?.stats[5].base_stat,
          pokemons[arrPosition].data?.weight
        )}
      </Modal>
    )
  }, [modal, pokemons, arrPosition])

  useEffect(() => {
    console.log(pokemons)
  })
  return (
    <div className="App">
      <>
        <Header />
        <S.WrapperList>
          {renderPoke(pokemons)}
          {renderModal()}
        </S.WrapperList>
        <SearchBar isOpen={isSearch} onCloseSearch={() => setIsSearch(false)} />
        <NavBar onFilter={() => handleFilter(true, true)} onOpenSearch={() => setIsSearch(true)} onFavorites={() => handleFavorites()} showFavorites={isFavorite}/>
      </>
    </div>
  )
};

export default App
