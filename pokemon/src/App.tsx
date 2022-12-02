import * as S from './styled';
import Filter from './assets/svg/filter';
import Lupe from './assets/svg/lupe';
import Star from './assets/svg/star';
import Button from './components/button';
import Text from './components/text';
function App() {

  return (
    <div className="App">
      <S.Header>
        <S.PokemonLogo />
        <S.WrapperPokeBall>
          <S.Pokeball />
        </S.WrapperPokeBall>
      </S.Header>
      <S.NavBar>
        <S.WrapperButton>
          <Button height='none' onClick={() => console.log('teste')}>
            <S.WrapperChildrenButton>
              <Filter />
              <Text color='#fff' fontSize='15px'>
                Filter
              </Text>
            </S.WrapperChildrenButton>
          </Button>
          <Button height='none' onClick={() => console.log('teste')}>
            <S.WrapperChildrenButton>
              <Star />
              <Text color='#fff' fontSize='15px'>
                Favorites
              </Text>
            </S.WrapperChildrenButton>
          </Button>
          <Button height='none' onClick={() => console.log('teste')}>
            <S.WrapperChildrenButton>
              <Lupe />
              <Text color='#fff' fontSize='15px'>
                Search
              </Text>
            </S.WrapperChildrenButton>
          </Button>
        </S.WrapperButton>
      </S.NavBar>
    </div>
  )
};

export default App;
