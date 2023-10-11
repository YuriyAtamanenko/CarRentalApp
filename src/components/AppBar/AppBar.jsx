import {
  Header,
  StyledLink,
  Navigation,
  HeadContainer,
  StyledHomeLink,
} from './AppBar.styled';
import Icons from '../../images/sprite.svg';

export default function AppBar() {
  return (
    <Header>
      <HeadContainer>
        <StyledHomeLink to="/">
          <svg width={60} height={60}>
            <use href={Icons + '#icon-icon-logo'}></use>
          </svg>
          CarRental
        </StyledHomeLink>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Navigation>
      </HeadContainer>
    </Header>
  );
}
