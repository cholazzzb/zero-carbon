import { FunctionComponent } from 'react';
import { Flex } from '../components/common';
import { mainStiches } from '../themes';

type DetailCardProps = {
  location: string;
  category: string;
  startYear: string;
};

const DetailCard: FunctionComponent<DetailCardProps> = (props) => {
  return (
    <Container>
      <HeaderText>Detail</HeaderText>
      <Flex>
        <CaptionKeyText>location</CaptionKeyText>
        <CaptionValueText> {props.location}</CaptionValueText>
      </Flex>
      <Flex>
        <CaptionKeyText>category</CaptionKeyText>
        <CaptionValueText>{props.category}</CaptionValueText>
      </Flex>
      <Flex>
        <CaptionKeyText>started</CaptionKeyText>
        <CaptionValueText>{props.startYear}</CaptionValueText>
      </Flex>
    </Container>
  );
};

export default DetailCard;

const Container = mainStiches.styled(Flex, {
  flexDirection: 'column',
  width: '400px',
  height: '300px',
  backgroundColor: 'rgba(50,50,50,0.1)',
  marginInlineStart: '20px',
  padding: '10px',
});

const HeaderText = mainStiches.styled('h1', {
  textTransform: 'uppercase',
});

const CaptionKeyText = mainStiches.styled('p', {
  textTransform: 'uppercase',
  width: '100px',
});

const CaptionValueText = mainStiches.styled('p', {});
