import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogList from 'components/Catalog/CatalogList/CatalogList';
import { getAll } from 'redux/Catalog/operations';
import { selectCatalog } from 'redux/Catalog/selectors';
export default function Catalog() {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return <CatalogList catalog={catalog} />;
}
