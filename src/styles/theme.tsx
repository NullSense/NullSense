export interface ITheme {
  palette: {
    darkPrimary: string
    primary: string
    midPrimary: string
    lightPrimary: string
    black: string
    white: string
  }
  spacing: {
    unit: number
  }
}

const mainTheme = {
  palette: {
    darkPrimary: 'black',
    primary: 'black',
    white: '#FFFFFF',
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
