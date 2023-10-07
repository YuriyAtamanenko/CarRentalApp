import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAll } from 'redux/operations';
export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return <div>Catalog</div>;
}
