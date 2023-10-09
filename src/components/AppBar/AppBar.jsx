import { Header, StyledLink, Navigation } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <StyledLink to="/">Rentalcars</StyledLink>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
    </Header>
  );
}
