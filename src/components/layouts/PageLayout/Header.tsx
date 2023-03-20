import * as S from './PageLayout.styled';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <S.Logo
      onClick={() => {
        navigate({
          pathname: '/',
        });
      }}
    >
      Logo
    </S.Logo>
  );
};

export const Header = (): JSX.Element => {
  return (
    <S.HeaderWrapper>
      <Logo />
      {/*<S.HeaderTitle>Header</S.HeaderTitle>*/}
    </S.HeaderWrapper>
  );
};
