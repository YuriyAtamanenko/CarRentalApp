import CatalogList from 'components/Catalog/CatalogList/CatalogList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAll } from 'redux/operations';
export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return <CatalogList />;
}
