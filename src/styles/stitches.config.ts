import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { config, createTheme, css, getCssText, globalCss, styled, theme, keyframes } =
  createStitches({
    theme: {
      colors: {
        hiContrast: 'hsl(206,10%,5%)',
        loContrast: 'white',

        gray100: '#EDF2F7',
        gray200: '#E2E8F0',
        gray300: '#CBD5E0',
        gray400: '#A0AEC0',
        gray500: '#718096',
        gray600: '#4A5568',

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
      },
      sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
      },
      fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '17px',
        5: '19px',
        6: '21px',
      },
      fonts: {
        system: 'system-ui',
      },
    },
    utils: {
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
    },
  });
