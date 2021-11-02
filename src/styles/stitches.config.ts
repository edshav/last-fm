import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

const heightHeader = '80px';
const paddingXLayout = '48px';

export const stitchesConfig = {
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      primary100: '$orange300',
      primary200: '$orange400',

      gray100: '#EDF2F7',
      gray200: '#E2E8F0',
      gray300: '#CBD5E0',
      gray400: '#A0AEC0',
      gray500: '#718096',
      gray600: '#4A5568',
      gray700: '#2D3748',
      gray800: '#1A202C',
      gray900: '#171923',

      purple100: '#E9D8FD',
      purple200: '#D6BCFA',
      purple300: '#B794F4',
      purple400: '#9F7AEA',
      purple500: '#805AD5',
      purple600: '#6B46C1',

      teal100: '#B2F5EA',
      teal200: '#81E6D9',
      teal300: '#4FD1C5',
      teal400: '#38B2AC',
      teal500: '#319795',
      teal600: '#2C7A7B',

      orange100: '#FEEBC8',
      orange200: '#FBD38D',
      orange300: '#F6AD55',
      orange400: '#ED8936',
      orange500: '#DD6B20',
      orange600: '#C05621',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      heightHeader,
      paddingXLayout,
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      heightHeader,
      paddingXLayout,
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '36px',
      8: '48px',
    },
    fonts: {
      system: 'system-ui',
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 700,
    },
    lineHeights: {
      1: '14px',
      2: '16px',
      3: '18px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '44px',
      8: '58px',
    },
    letterSpacings: {
      normal: 0,
      wide: '0.01px',
      wider: '0.4px',
      widest: '1px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '2px',
      2: '4px',
    },
    shadows: {},
    zIndices: {},
    transitions: {
      1: 'all 0.2s ease-out',
    },
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
  media: {
    bp0: '(max-width: 479px)', // mobileL
    bp1: '(min-width: 480px)', // mobileL
    bp2: '(min-width: 768px)', // tablet
    bp3: '(min-width: 1024px)', // laptop
    bp4: '(min-width: 1440px)', // laptopL
    bp5: '(min-width: 2560px)', // 4k
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
};

export const { config, createTheme, css, getCssText, globalCss, styled, theme, keyframes } =
  createStitches({ ...stitchesConfig });

export type CSS = Stitches.CSS<typeof stitchesConfig>;
