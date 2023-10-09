import { List } from './CatalogList.styled';
import CatalogItem from '../CatalogItem/CatalogItem';

export default function CatalogList({ catalog }) {
  return (
    <List>
      {catalog.map(advert => (
        <CatalogItem key={advert.id} info={advert} />
      ))}
    </List>
  );
}
