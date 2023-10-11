import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Filter from 'components/Filter/Filter';
import CatalogList from 'components/Catalog/CatalogList/CatalogList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

import { selectFavorites } from 'redux/Favorites/selectors';
import { Container } from 'components/App/App.styled';
import NotFoundFavorites from 'components/Favorites/NotFoundFavorites';
import NotFoundFilterCatalog from 'components/Catalog/NotFoundFilterCatalog/NotFoundFilterCatalog';

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  const [isShowBtn, setIsShowBtn] = useState(true);
  const [pageCtrl, setPageCtrl] = useState(8);
  const [filteredAdverts, setFilteredAdverts] = useState(null);

  useEffect(() => {
    pageCtrl >= favorites.length || favorites.length < 9
      ? setIsShowBtn(false)
      : setIsShowBtn(true);
  }, [pageCtrl, favorites.length]);

  const onShowNextPage = () => {
    setPageCtrl(prevState => prevState + 8);
  };

  const onFiltering = ({
    selectedMake,
    selectedPrice,
    fromMiliage,
    toMiliage,
  }) => {
    const filtering = favorites.filter(
      ({ make, rentalPrice, mileage }) =>
        make.includes(selectedMake) &&
        Number(rentalPrice.slice(1, rentalPrice.length)) <= selectedPrice &&
        mileage >= fromMiliage &&
        mileage <= toMiliage
    );

    setFilteredAdverts(filtering);
    setIsShowBtn(false);
  };

  return (
    <Container>
      <Filter onFiltering={onFiltering} />
      {filteredAdverts ? (
        <CatalogList catalog={filteredAdverts.slice(0, pageCtrl)} />
      ) : (
        <CatalogList catalog={favorites.slice(0, pageCtrl)} />
      )}
      {isShowBtn && <LoadMoreBtn onShowNextPage={onShowNextPage} />}
      {favorites.length === 0 && <NotFoundFavorites />}
      {filteredAdverts?.length === 0 && <NotFoundFilterCatalog />}
    </Container>
  );
}
