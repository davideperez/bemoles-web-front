import { ChangeEvent } from 'react';

export type PaginationProps = {
  justify: string;
  align?: string;
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  pageNeighbours: number;
  changePage: (page: number) => void;
  changePageItems?: (item: ChangeEvent<HTMLSelectElement>) => void;
  itemsPerPage?: number;
  showPageItem?: boolean;
  numberOfItems?: number[];
  urlSyncronized?: boolean;
};
