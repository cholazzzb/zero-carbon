import Head from 'next/head';
import Link from 'next/link';

import { PrimaryButton } from 'src/presentational/components/common';
import { Container, Main, Title } from 'src/presentational/home/components';
import { mainStiches } from 'src/presentational/themes';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Zero Carbon</title>
        <meta name="description" content="Zero Carbon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Welcome to Zero Carbon</Title>
        <Link href="/projects">
          <ProjectButton>See Projects</ProjectButton>
        </Link>
      </Main>
    </Container>
  );
}

const ProjectButton = mainStiches.styled(PrimaryButton, {
  width: '100px',
  height: '40px',
  borderRadius: '20px',
});
