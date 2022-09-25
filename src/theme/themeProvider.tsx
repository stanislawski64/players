import { ReactNode } from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
})

let theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#181c2c', paper: '#262b3d' },
    text: { secondary: '#7992a1' },
    divider: '#272d46',
  },
})
theme = createTheme(theme, {
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            // changes TextField autofill background
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
          },
        },
      },
    },
  },
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider value={muiCache}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CacheProvider>
  )
}
