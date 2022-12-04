import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Project } from 'src/domain/projects/entity';
import { Flex } from 'src/presentational/components/common';
import Navbar from 'src/presentational/components/Navbar';
import DetailCard from 'src/presentational/projects/DetailCard';
import ImageCollection from 'src/presentational/projects/ImageCollection';
import { mainStiches } from 'src/presentational/themes';

import {
  getProjectByID,
  getProjectsData,
} from 'src/repository/projects/service';
import { getClientQueryParams } from 'src/shared/queryParams';

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsData = await getProjectsData({
    page: 1,
    pageSize: 25,
    categories: ['AFOLU', 'ARR', 'Afforestation', 'Agriculture'],
  });

  const paths = projectsData.reduce(
    (acc, projectData) => {
      projectData.data.forEach((d) => {
        acc.push({
          params: { projectID: `${d.id}` },
        });
      });
      return acc;
    },
    [] as Array<{
      params: { projectID: string };
    }>,
  );

  return {
    fallback: 'blocking',
    paths,
  };
};

export const getStaticProps = async (
  staticPropsContext: GetStaticPropsContext,
): Promise<GetStaticPropsResult<ProjectDetailPageProps>> => {
  const { params } = staticPropsContext;

  const projectID = getClientQueryParams(params?.projectID);
  try {
    const project: Project = await getProjectByID({ projectID });

    if ('error' in project) {
      throw new Error(`getProjectByID Error. ID: ${projectID}`);
    }

    return { props: { project } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

type ProjectDetailPageProps = {
  project: Project;
};

const ProjectDetailPage: FunctionComponent<ProjectDetailPageProps> = (
  props,
) => {
  return (
    <Flex
      css={{
        width: '100%',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
      }}>
      <Navbar />
      <Title>
        <Link href="/projects">
          <BackButton>&#8592;</BackButton>
        </Link>
        <TitleText>{props.project.name}</TitleText>
      </Title>
      <Flex>
        <ImageCollection images={props.project.images} />
        <DetailCard
          location={props.project.location}
          category={props.project.category}
          startYear={props.project.startYear}
        />
      </Flex>
      <OtherContainer>
        <Flex>
          <Flex
            css={{
              width: '250px',
            }}>
            <OtherHeader>project overview</OtherHeader>
          </Flex>
          <OtherBody>
            <Text>{props.project.overview}</Text>
          </OtherBody>
        </Flex>
        <Flex>
          <Flex
            css={{
              width: '250px',
            }}>
            <OtherHeader>impacts highlights</OtherHeader>
          </Flex>
          <OtherBody>
            <Text>{props.project.impact}</Text>
          </OtherBody>
        </Flex>
      </OtherContainer>
    </Flex>
  );
};

export default ProjectDetailPage;

const Title = mainStiches.styled(Flex, {
  alignItems: 'center',
});

const BackButton = mainStiches.styled('button', {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
});

const TitleText = mainStiches.styled('h1', {
  marginInlineStart: '10px',
});

const Text = mainStiches.styled('p', {});

const OtherContainer = mainStiches.styled(Flex, {
  flexDirection: 'column',
});

const OtherHeader = mainStiches.styled('h1', {
  textTransform: 'uppercase',
});

const OtherBody = mainStiches.styled(Flex, {
  width: '700px',
});
