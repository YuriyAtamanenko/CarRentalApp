import { useSelector } from 'react-redux';
import CatalogList from 'components/Catalog/CatalogList/CatalogList';
import { selectFavorites } from 'redux/Favorites/selectors';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  const [isShowBtn, setIsShowBtn] = useState(true);
  const [pageCtrl, setPageCtrl] = useState(8);

  useEffect(() => {
    pageCtrl >= favorites.length || favorites.length < 9
      ? setIsShowBtn(false)
      : setIsShowBtn(true);
  }, [pageCtrl, favorites.length]);

  const onShowNextPage = () => {
    setPageCtrl(prevState => prevState + 8);
  };

  return (
    <section>
      <CatalogList catalog={favorites.slice(0, pageCtrl)} />
      {isShowBtn && <LoadMoreBtn onShowNextPage={onShowNextPage} />}
    </section>
  );
}
