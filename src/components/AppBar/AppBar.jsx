import { StyledLink } from './AppBar.styled';

export default function AppBar() {
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog">Catalog</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </div>
  );
}
