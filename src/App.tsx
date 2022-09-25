import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import { ThemeProvider } from './theme/themeProvider'
import { Home } from './pages/Home/Home'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <CssBaseline enableColorScheme />
          <Home />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  )
}
