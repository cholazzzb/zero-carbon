import Head from 'next/head';
import { Container, Main, Title } from 'src/presentational/home/components';

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
      </Main>
    </Container>
  );
}
