import { FunctionComponent, useEffect, useState } from 'react';

import { Category, Project } from 'src/domain/projects/entity';
import { getProjectsData } from 'src/repository/projects/service';
import { Flex } from '../components/common';
import { mainStiches } from '../themes';
import Card from './Card';
import CategorySelect from './CategorySelect';
import Pagination from './Pagination';

type ColumnProps = {
  category: Category;
  data: Array<Project>;
  numOfData: number;
};

const Column: FunctionComponent<ColumnProps> = (props) => {
  const [data, setData] = useState(props.data);
  const [category, setCategory] = useState(props.category);

  const onSelectCategory = async (category: Category) => {
    setCategory(category);
    setPage(1);
    try {
      const res = await getProjectsData({
        page: page,
        pageSize: 10,
        categories: [category],
      });
      setData(res[0].data);
    } catch (error) {}
  };

  const [page, setPage] = useState(1);
  const onClickPage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await getProjectsData({
          page: page,
          pageSize: 10,
          categories: [category],
        });
        setData(res[0].data);
      } catch (error) {}
    })();
  }, [page]);

  return (
    <Container>
      <CategorySelect
        selectedCategory={category}
        onSelectCategory={onSelectCategory}
      />
      {data.map((project) => (
        <Card
          key={project.name}
          imageURL={project.images[0]}
          title={project.name}
          category={project.category}
          projectURL={`/projects/${project.id}`}
        />
      ))}
      <Pagination
        numOfData={props.numOfData}
        pageSize={10}
        page={page}
        onClickPage={onClickPage}
      />
    </Container>
  );
};

export default Column;

export const Container = mainStiches.styled(Flex, {
  flexDirection: 'column',
  minHeight: '980px',
  margin: '10px',
});
