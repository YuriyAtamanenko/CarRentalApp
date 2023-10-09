import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from 'components/Catalog/CatalogList/CatalogList';
import { getAll } from 'redux/Catalog/operations';
import { selectCatalog } from 'redux/Catalog/selectors';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
export default function Catalog() {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const [isShowBtn, setIsShowBtn] = useState(true);
  const [pageCtrl, setPageCtrl] = useState(8);

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

  return (
    <section>
      <CatalogList catalog={catalog.slice(0, pageCtrl)} />
      {isShowBtn && <LoadMoreBtn onShowNextPage={onShowNextPage} />}
    </section>
  );
}
