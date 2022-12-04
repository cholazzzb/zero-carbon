import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';

import { Flex } from 'src/presentational/components/common';
import Navbar from 'src/presentational/components/Navbar';
import Column from 'src/presentational/projects/Column';
import { getProjectsData, ProjectsData } from 'src/repository/projects/service';

export const getServerSideProps: GetServerSideProps<{
  projectsData: ProjectsData;
}> = async () => {
  const projectsData = await getProjectsData({
    page: 1,
    pageSize: 10,
    categories: ['AFOLU', 'ARR', 'Afforestation'],
  });

  return { props: { projectsData } };
};

type ProjectsProps = {
  projectsData: ProjectsData;
};

const Projects: FunctionComponent<ProjectsProps> = (props) => {
  return (
    <Flex
      css={{
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
        overflowY: 'scroll',
      }}>
      <Navbar />
      <Flex
        css={{
          justifyContent: 'center',
        }}>
        {props.projectsData.map((projectData) => (
          <Column
            key={projectData.category}
            category={projectData.category}
            data={projectData.data}
            numOfData={projectData.numOfData}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
