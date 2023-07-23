import { Button, Select, Stack, VStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineRight,
} from "react-icons/ai";

import { PaginationItem } from "../PaginationItem";

import { PaginationProps } from "./types.d";

function calculatePageNumbers(totalPosts: number, postsPerPage: number) {
  const arrayOfPageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    arrayOfPageNumbers.push(i);
  }
  return arrayOfPageNumbers;
}

const Pagination: FC<PaginationProps> = ({
  justify = "center",
  align = "center",
  postsPerPage,
  totalPosts,
  currentPage,
  pageNeighbours,
  changePage,
  changePageItems,
  itemsPerPage,
  showPageItem,
  numberOfItems = [10, 20, 30],
  urlSyncronized = true,
}) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>(
    calculatePageNumbers(totalPosts, postsPerPage)
  );
  const router = useRouter();

  useEffect(() => {
    if (!urlSyncronized) return;
    const arrayOfPageNumbers = calculatePageNumbers(totalPosts, postsPerPage);
    setPageNumbers(arrayOfPageNumbers);
    router.push(
      `${router.pathname}?page=${
        currentPage > Number(arrayOfPageNumbers.at(-1)) ? 1 : currentPage
      }&items=${
        numberOfItems.includes(postsPerPage) ? postsPerPage : numberOfItems[0]
      }`
    );
  }, [totalPosts, postsPerPage]);

  return (
    <Stack direction="row" justify={justify} align={align} spacing="4">
      {pageNumbers.length > 0 && (
        <Stack direction="row" spacing="4">
          <Button
            key="first"
            size="sm"
            fontSize="xs"
            width="4"
            bg="white"
            isDisabled={currentPage <= 1}
            _hover={{
              bg: "gray.300",
            }}
            onClick={() => changePage(1)}
          >
            <AiOutlineDoubleLeft />
          </Button>
          <Button
            key="previous"
            size="sm"
            fontSize="xs"
            width="4"
            bg="white"
            isDisabled={currentPage <= 1}
            _hover={{
              bg: "gray.300",
            }}
            onClick={() => changePage(currentPage > 0 ? currentPage - 1 : 0)}
          >
            <AiOutlineLeft />
          </Button>
          {pageNumbers.map(
            (page: number) =>
              page >= currentPage - pageNeighbours &&
              page <= currentPage + pageNeighbours && (
                <PaginationItem
                  key={page}
                  page={page}
                  isCurrent={page === currentPage}
                  paginate={changePage}
                />
              )
          )}
          <Button
            key="next"
            size="sm"
            fontSize="xs"
            width="4"
            bg="white"
            isDisabled={currentPage >= pageNumbers.length}
            _hover={{
              bg: "gray.300",
            }}
            onClick={() =>
              changePage(
                currentPage < pageNumbers.length ? currentPage + 1 : currentPage
              )
            }
          >
            <AiOutlineRight />
          </Button>
          <Button
            key="last"
            size="sm"
            fontSize="xs"
            width="4"
            bg="white"
            isDisabled={currentPage >= pageNumbers.length}
            _hover={{
              bg: "gray.300",
            }}
            onClick={() => changePage(pageNumbers.length)}
          >
            <AiOutlineDoubleRight />
          </Button>
        </Stack>
      )}
      {showPageItem && (
        <VStack spacing={1} alignItems="flex-start">
          <Text m={0} fontSize="12px">
            Items por página:
          </Text>
          <Select
            w="100px"
            size="sm"
            onChange={changePageItems}
            defaultValue={itemsPerPage}
            bg="white"
          >
            {numberOfItems?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </VStack>
      )}
    </Stack>
  );
};

export default Pagination;
