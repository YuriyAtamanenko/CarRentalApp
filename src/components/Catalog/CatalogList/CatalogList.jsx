import { useSelector } from 'react-redux';
import { selectCatalog } from 'redux/selectors';
import { List } from './CatalogList.styled';
import CatalogItem from '../CatalogItem/CatalogItem';

export default function CatalogList() {
  const catalog = useSelector(selectCatalog);
  console.log(catalog);

  return (
    <List>
      {catalog.map(advert => (
        <CatalogItem key={advert.id} info={advert} />
      ))}
    </List>
  );
}
