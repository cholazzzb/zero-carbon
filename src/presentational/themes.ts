import { createStitches } from '@stitches/react';

export const mainStiches = createStitches({
  theme: {
    colors: {
      primary: '#21B5C1',
      secondary: '#2A6041',
      tertiary: '#E5D4ED',
      tertiary2: '#6D72C3',
      tertiary3: '#5941A9',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});

export const globalStyles = mainStiches.globalCss({
  html: {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  body: {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  a: { color: 'inherit', textDecoration: 'none' },
  '*': { boxSizing: 'border-box' },
});
