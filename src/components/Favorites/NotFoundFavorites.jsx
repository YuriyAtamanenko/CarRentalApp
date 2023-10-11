import { NotFound, StyledCatalogLink } from './NotFoundFavorites.styled';

export default function NotFoundFavorites() {
  return (
    <NotFound>
      The list of favorite cars is empty.
      <br /> Choose your favorite cars in the{' '}
      <StyledCatalogLink to="/catalog">catalog</StyledCatalogLink>.
    </NotFound>
  );
}
