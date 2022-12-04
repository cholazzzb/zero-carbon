import { mainStiches } from '../themes';

export const Flex = mainStiches.styled('div', {
  display: 'flex',
});

export const Center = mainStiches.styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
});

export const PrimaryButton = mainStiches.styled('button', {
  cursor: 'pointer',
  backgroundColor: '$primary',
  color: 'White',
  border: 'none',
  '&:hover': {
    opacity: '0.9',
  },
});
