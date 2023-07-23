import { Button } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  page: number;
  isCurrent: boolean;
  paginate: (page: number) => void;
}
const PaginationItem: FC<Props> = ({ page, isCurrent, paginate }) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="teal"
        bg="#9D6E33"
        disabled
        _hover={{
          bg: "#9D6E33",
          opacity: 0.7,
        }}
        _disabled={{
          bg: "#9D6E33",
          cursor: 'pointer',
        }}
      >
        {page}
      </Button>
    );
  }
  return (
    <Button
      key={page}
      size="sm"
      fontSize="xs"
      width="4"
      bg="white"
      _hover={{
        bg: 'gray.300',
      }}
      onClick={() => paginate(page)}
    >
      {page}
    </Button>
  );
};

export default PaginationItem;
