import { LoadMore } from './LoadMoreBtn.styled';

export default function LoadMoreBtn({ onShowNextPage }) {
  return (
    <LoadMore type="button" onClick={onShowNextPage}>
      Load more
    </LoadMore>
  );
}
