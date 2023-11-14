import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from 'components/Catalog/CatalogList/CatalogList';
import { getAll } from 'redux/Catalog/operations';
import { selectCatalog } from 'redux/Catalog/selectors';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import Filter from 'components/Filter/Filter';
import { Container } from 'components/App/App.styled';
import NotFoundFilterCatalog from 'components/NotFound/NotFoundFilterCatalog/NotFoundFilterCatalog';
import { ICar } from 'components/Catalog/CatalogItem/CatalogItem.types';
import { AppDispatch } from 'redux/store';

interface IFilter {
  selectedMake: string;
  selectedPrice: number;
  fromMiliage: number;
  toMiliage: number;
}

export default function Catalog() {
  const dispatch = useDispatch<AppDispatch>();
  const catalog = useSelector(selectCatalog);
  const [isShowBtn, setIsShowBtn] = useState(true);
  const [pageCtrl, setPageCtrl] = useState(8);
  const [filteredAdverts, setFilteredAdverts] = useState<ICar[]>([]);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    pageCtrl >= catalog.length || catalog.length < 9
      ? setIsShowBtn(false)
      : setIsShowBtn(true);
  }, [pageCtrl, catalog.length]);

  const onShowNextPage = () => {
    setPageCtrl(prevState => prevState + 8);
  };

  const onFiltering = ({
    selectedMake,
    selectedPrice,
    fromMiliage,
    toMiliage,
  }: IFilter) => {
    const filtering = catalog.filter(
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
        <CatalogList catalog={filteredAdverts} />
      ) : (
        <CatalogList catalog={catalog.slice(0, pageCtrl)} />
      )}
      {isShowBtn && <LoadMoreBtn onShowNextPage={onShowNextPage} />}
      {filteredAdverts?.length === 0 && <NotFoundFilterCatalog />}
    </Container>
  );
}
