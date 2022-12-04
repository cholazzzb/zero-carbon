import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, PropsWithChildren } from 'react';

import { generateImage } from 'src/shared/image';
import { PrimaryButton } from '../components/common';
import { mainStiches } from '../themes';

type CardProps = PropsWithChildren<{
  imageURL: string;
  title: string;
  category: string;
  projectURL: string;
}>;

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <Layout>
      <ImageContainer>
        <Image
          src={props.imageURL}
          alt={`image-${props.imageURL}`}
          placeholder="blur"
          blurDataURL={generateImage(300, 200)}
          width={300}
          height={200}
        />
      </ImageContainer>
      <TitleText>{props.title}</TitleText>
      <CategoryText>{props.category}</CategoryText>
      <SeeMoreButton>
        <Link href={props.projectURL}>See More</Link>
      </SeeMoreButton>
    </Layout>
  );
};

export default Card;

const Layout = mainStiches.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  width: '330px',
  minHeight: '400px',
  padding: '15px',
  borderRadius: '30px',
  boxShadow: '0px 16px 40px rgba(117,142,254,0.2)',
});

const ImageContainer = mainStiches.styled('div', {
  width: '300px',
  height: '200px',
  borderRadius: '15px',
});

const TitleText = mainStiches.styled('h1', {
  fontSize: '18px',
  height: '40px',
});

const CategoryText = mainStiches.styled('p', {
  color: '$secondary',
  fontSize: '12px',
});

const SeeMoreButton = mainStiches.styled(PrimaryButton, {
  cursor: 'pointer',
  backgroundColor: '$primary',
  color: 'white',
  borderRadius: '20px',
  height: '40px',
  marginInline: '10px',
  border: 'none',
  '&:hover': {
    opacity: 0.9,
  },
});
