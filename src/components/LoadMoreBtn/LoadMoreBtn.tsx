import { LoadMore } from './LoadMoreBtn.styled';

interface ILoadMoreBtnProps {
  onShowNextPage: () => void;
}

export default function LoadMoreBtn({ onShowNextPage }: ILoadMoreBtnProps) {
  return (
    <LoadMore type="button" onClick={onShowNextPage}>
      Load more
    </LoadMore>
  );
}
