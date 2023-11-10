import { List } from './CatalogList.styled';
import CatalogItem from '../CatalogItem/CatalogItem';
import { ICar } from '../CatalogItem/CatalogItem.types';

interface ICatalogListProps {
  catalog: ICar[];
}

export default function CatalogList({ catalog }: ICatalogListProps) {
  return (
    <List>
      {catalog.map(advert => (
        <CatalogItem key={advert.id} info={advert} />
      ))}
    </List>
  );
}
