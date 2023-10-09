import { useSelector } from 'react-redux';
import CatalogList from 'components/Catalog/CatalogList/CatalogList';
import { selectFavorites } from 'redux/Favorites/selectors';

export default function Favorites() {
  const favorites = useSelector(selectFavorites);
  return <CatalogList catalog={favorites} />;
}
