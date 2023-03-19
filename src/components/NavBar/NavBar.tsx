import { Link } from 'react-router-dom';
import { NavBarWrapper } from './NavBar.styled';

export const NavBar = (): JSX.Element => {
  return (
    <NavBarWrapper gap="10px">
      <Link to="/">Home</Link>
      <Link to="lottie">Lottie</Link>
    </NavBarWrapper>
  );
};
