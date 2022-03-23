const colorNames = {
  white: '#FFFFFF',
  mercury: '#E5E5E5',
  mineShaft: '#252525',
  scienceBlue: '#0366D6',
  mischka: 'D1D5DB',
  staleGray: '#6E7E91',
};

export const lightTheme = {
  color: {
    primary: colorNames.mineShaft,
    secondary: colorNames.scienceBlue,
    tertiary: colorNames.mercury,
    quaternary: colorNames.white,
  },
  button: {
    background: colorNames.scienceBlue,
    border: colorNames.mischka,
  },
  text: {
    primary: colorNames.mineShaft,
    secondary: colorNames.staleGray,
  },
};

export const darkTheme = {
  color: {
    primary: colorNames.dark,
    secondary: colorNames.dark,
    tertiary: colorNames.dark,
    quaternary: colorNames.white,
  },
  button: {
    background: colorNames.white,
    border: colorNames.mischka,
  },
  text: {
    primary: colorNames.mineShaft,
    secondary: colorNames.staleGray,
  },
};
