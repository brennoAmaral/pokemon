import { FC } from 'react';
import * as S from './styled';
import Filter from '../../assets/svg/filter';
import Lupe from '../../assets/svg/lupe';
import Star from '../../assets/svg/Star';
import theme from '../../styles/theme';
import Text from '../text';
import Button from '../button';

const NavBar: FC = () => {
    
  return(
    <S.NavBar>
        <S.WrapperButton>
          <Button height='none' onClick={() => console.log('teste')}>
            <S.WrapperChildrenButton>
              <Filter />
              <Text color={theme.white} fontSize='15px'>
                Filter
              </Text>
            </S.WrapperChildrenButton>
          </Button>
          <Button height='none' onClick={() => console.log('teste')}>
            <S.WrapperChildrenButton>
              <Star size={31} stroke={theme.white} fill={theme.darkBlue}/>
              <Text color={theme.white} fontSize='15px'>
                Favorites
              </Text>
            </S.WrapperChildrenButton>
          </Button>
          <Button height='none' onClick={() => console.log('teste')}>
            <S.WrapperChildrenButton>
              <Lupe />
              <Text color={theme.white} fontSize='15px'>
                Search
              </Text>
            </S.WrapperChildrenButton>
          </Button>
        </S.WrapperButton>
      </S.NavBar>
  ) ;
};

export default NavBar;