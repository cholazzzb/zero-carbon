import { FunctionComponent } from 'react';

import { Center } from '../components/common';
import { mainStiches } from '../themes';

type PaginationProps = {
  numOfData: number;
  pageSize: number;
  page: number;
  onClickPage: (page: number) => void;
};

const Pagination: FunctionComponent<PaginationProps> = (props) => {
  const numOfItems = Math.ceil(props.numOfData / props.pageSize);
  return (
    <Container>
      {Array(numOfItems)
        .fill(null)
        .map((_, idx) => {
          const page = idx + 1;
          const active = page === props.page;

          return (
            <Item
              key={idx}
              css={{
                backgroundColor: active ? '$primary' : 'White',
                color: active ? 'White' : 'black',
              }}
              onClick={() => props.onClickPage(page)}>
              {page}
            </Item>
          );
        })}
    </Container>
  );
};

export default Pagination;

const Container = mainStiches.styled(Center, {
  height: '50px',
  width: '100%',
  marginBlock: '40px',
  borderRadius: '30px',
  backgroundColor: 'White',
  boxShadow: '0px 16px 40px rgba(117,142,254,0.2)',
});

const Item = mainStiches.styled('button', {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginInline: '10px',
  width: '35px',
  height: '35px',
  border: 'none',
  borderRadius: '50%',
});
