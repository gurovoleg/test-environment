export const defaultBreakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 996,
  xl: 1200,
  xxl: 1440,
};

const colors = {
  primaryColor: '#005A79',
  orangeColor: '#EE7A19',
  bgColor: '#FAFAFA',
};

export const baseTheme = {
  ...colors,
  breakpoints: defaultBreakpoints,
  button: {
    bgColor: colors.primaryColor,
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    size: {
      sm: {
        padding: '5px 10px',
        fontSize: '12px',
        lineHeight: '16px',
      },
      md: {
        padding: '7px 12px',
        fontSize: '12px',
        lineHeight: '16px',
      },
      lg: {
        padding: '10px 20px',
        fontSize: '14px',
        lineHeight: '16px',
      },
    },
  },
};

export type ThemeType = typeof baseTheme;
