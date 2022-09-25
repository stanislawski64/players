import { Box } from '@mui/material'

import { PlayerTable } from '../../components/PlayerTable/PlayerTable'
import { Search } from '../../components/Search/Search'
import { ReactComponent as Logo } from '../../logos/logoPrimary.svg'

export const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mt={4}>
        <Logo height="100%" width="250px" />
      </Box>
      <Box maxWidth="sm" width={1} mt={4}>
        <Search />
      </Box>
      <PlayerTable />
    </Box>
  )
}
