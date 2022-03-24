const colorNames = {
  white: '#FFFFFF',
  mercury: '#E5E5E5',
  mineShaft: '#252525',
  scienceBlue: '#0366D6',
  mischka: 'D1D5DB',
  staleGray: '#6E7E91',
  dodgerBlue: '#2188FF',
  selago: '#E3E3F7',
};

export const lightTheme = {
  color: {
    primary: colorNames.mineShaft,
    secondary: colorNames.scienceBlue,
    tertiary: colorNames.mercury,
    quaternary: colorNames.white,
  },
  background: {
    primary: colorNames.salago,
    secondary: colorNames.white,
  },

  button: {
    background: colorNames.scienceBlue,
    border: colorNames.mischka,
  },
  text: {
    primary: colorNames.mineShaft,
    secondary: colorNames.staleGray,
    tertiary: colorNames.white,
  },
};

export const darkTheme = {
  color: {
    primary: colorNames.mineShaft,
    secondary: colorNames.scienceBlue,
    tertiary: colorNames.mercury,
    quaternary: colorNames.white,
  },
  background: {
    primary: colorNames.mineShaft,
    secondary: colorNames.white,
  },

  button: {
    background: colorNames.dodgerBlue,
    border: colorNames.mischka,
  },
  text: {
    primary: colorNames.white,
    secondary: colorNames.white,
    tertiary: colorNames.white,
  },
};
