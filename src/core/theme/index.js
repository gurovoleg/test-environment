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

  button: {
    bgColor: colors.primaryColor,
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
  },
};
