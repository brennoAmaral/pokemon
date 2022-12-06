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
import theme from './styles/theme'
import ElementType from './assets/svg/elementType'
import getPokemonsByElement from './services/filter'

function App (): JSX.Element {
  const { pokemons, setPokemons, resetPokemons } = useContext(PokemonSetupContext)
  const [modal, setModal] = useState<boolean>(false)
  const [arrPosition, setArrPosition] = useState<number>(0)
  const [filtering, setFiltering] = useState<boolean>(false)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(true)
  const [isFilter, setIsFilter] = useState<boolean>(true)
  const [modalFilter, setModalFilter] = useState<boolean>(false)
  const handleFilter = (typeNumber: number): void => {
    getPokemonsByElement(typeNumber).then((result) => {
      setPokemons(result)
    }).catch((error) => {
      console.log(error)
    })
    setIsFilter(false)
    setIsFavorite(true)
    setIsSearch(false)
  }

  const handlerModal = (valueModal: boolean, position: number): void => {
    setModal(valueModal)
    setArrPosition(position)
    setFiltering(false)
  }
  const openFilterOptions = (valueModal: boolean, filtering: boolean): void => {
    setModalFilter(valueModal)
    setFiltering(filtering)
  }
  const handleFavorites = (): void => {
    if (JSON.parse(localStorage.getItem('favorites') as string) !== null) {
      setIsFilter(true)
      setIsSearch(false)
      if (isFavorite) {
        setPokemons(JSON.parse(localStorage.getItem('favorites') as string))
        setIsFavorite(false)
      } else {
        resetPokemons()
        setIsFavorite(true)
      }
    }
  }

  const renderPoke = useCallback((pokemons: any) => {
    console.log('pokemons :', pokemons)
    if (pokemons.length === 0) {
      return (<Text>Nenhum valor foi encontrado...</Text>)
    }
    return pokemons.map((pokemon: any, index: number) => {
      return (
        <Card
          name={pokemon.name}
          id={pokemon.id}
          sprite={pokemon.sprites.front_default}
          type={pokemon.types[0].type.name}
          onClick={() => handlerModal(true, index)}
          hp={pokemons[arrPosition].stats[0].base_stat}
          attack={pokemons[arrPosition].stats[1].base_stat}
          especialAttack={pokemons[arrPosition].stats[3].base_stat}
          defense={pokemons[arrPosition].stats[2].base_stat}
          especialDefense={pokemons[arrPosition].stats[4].base_stat}
          speed={pokemons[arrPosition].stats[5].base_stat}
          weight={pokemons[arrPosition].weight}
          key={pokemon.name}
        />
      )
    }
    )
  }, [pokemons])

  const renderModal = useCallback(() => {
    return (
      <Modal
        isOpen={modal}
        onClose={() => setModal(false)}
        name={pokemons[arrPosition]?.name}
      >
        <>
          <S.HeaderModal>
            <Text fontSize='40px' bold margin='2px 0 0 0'>
              {pokemons[arrPosition]?.name}
            </Text>
          </S.HeaderModal>
          <img src={pokemons[arrPosition]?.sprites.front_default} height={'200px'} width={'200px'} />
          <S.WrapperText>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`ID: ${pokemons[arrPosition]?.id}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Type: ${pokemons[arrPosition]?.types[0].type.name}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`HP: ${pokemons[arrPosition]?.stats[0].base_stat}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Attack: ${pokemons[arrPosition]?.stats[1].base_stat}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Special Attack: ${pokemons[arrPosition]?.stats[3].base_stat}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Defense: ${pokemons[arrPosition]?.stats[2].base_stat}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Special Defense: ${pokemons[arrPosition]?.stats[4].base_stat}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`speed: ${pokemons[arrPosition]?.stats[5].base_stat}`}
            </Text>
            <Text fontSize='23px' color={theme.darkBlue} margin={'0 0 10px 0'}>
              {`Weight: ${pokemons[arrPosition]?.weight}`}
            </Text>
          </S.WrapperText>
        </>
        {/* {modalConstructure(
          filtering,
          pokemons[arrPosition]?.data?.name,
          pokemons[arrPosition]?.data?.sprites.front_default,
          pokemons[arrPosition]?.data?.id,
          pokemons[arrPosition]?.data?.types[0].type.name,
          pokemons[arrPosition]?.data?.stats[0].base_stat,
          pokemons[arrPosition]?.data?.stats[1].base_stat,
          pokemons[arrPosition]?.data?.stats[3].base_stat,
          pokemons[arrPosition]?.data?.stats[2].base_stat,
          pokemons[arrPosition]?.data?.stats[4].base_stat,
          pokemons[arrPosition]?.data?.stats[5].base_stat,
          pokemons[arrPosition]?.data?.weight
        )} */}
      </Modal>
    )
  }, [modal, pokemons, arrPosition])

  const renderModalFilter = useCallback(() => {
    return (
      <Modal
        isOpen={modalFilter}
        onClose={() => setModalFilter(false)}
        name={pokemons[arrPosition]?.name}
      >

        <S.WrapperElements>
          <Button onClick={() => handleFilter(10)} width='auto' height='auto'>
            <>
              <ElementType elementType='fire' background={theme.red} />
              <Text fontSize='25px'>
                fire
              </Text>
            </>
          </Button>
        </S.WrapperElements>

      </Modal>
    )
  }, [modalFilter, pokemons, arrPosition])
  useEffect(() => {
    resetPokemons()
  }, [])
  return (
    <div className="App">
      <>
        <Header />
        <S.WrapperList>
          {renderPoke(pokemons)}
          {renderModalFilter()}
          {renderModal()}
        </S.WrapperList>
        <SearchBar isOpen={isSearch} onCloseSearch={() => setIsSearch(false)} setIsFilter={() => setIsFilter(true)} setIsFavorite={() => setIsFavorite(true)} />
        <NavBar openFilter={() => openFilterOptions(true, true)} openSearch={() => setIsSearch(true)} openFavorites={() => handleFavorites()} showFavorites={isFavorite} isFilter={isFilter} isSearch={isSearch} setIsFavorite={() => setIsFavorite(true)} setIsSearch={() => setIsSearch(false)} />
      </>
    </div>
  )
};

export default App
