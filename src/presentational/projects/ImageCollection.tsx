import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { Flex } from '../components/common';
import { mainStiches } from '../themes';

type ImageCollectionProps = {
  images: Array<string>;
};

const ImageCollection: FunctionComponent<ImageCollectionProps> = (props) => {
  const [imageIdx, setImageIdx] = useState(0);
  const onClickImage = (imageIdx: number) => setImageIdx(imageIdx);
  return (
    <Flex
      css={{
        flexDirection: 'column',
      }}>
      <Image
        src={props.images[imageIdx]}
        alt={`image-${props.images[imageIdx]}`}
        width={560}
        height={300}
      />
      <Row>
        {props.images.map((imageURL, imageIdx) => (
          <ImageContainer key={imageURL} onClick={() => onClickImage(imageIdx)}>
            <Image
              src={imageURL}
              alt={`image-${imageURL}`}
              width={80}
              height={80}
            />
          </ImageContainer>
        ))}
      </Row>
    </Flex>
  );
};

export default ImageCollection;

const Row = mainStiches.styled(Flex, {
  paddingBlock: '20px',
});

const ImageContainer = mainStiches.styled(Flex, {
  marginInlineEnd: '10px',
  cursor: 'pointer',
});
