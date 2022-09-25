import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/material'

export const useStyles = makeStyles()((theme: Theme) => ({
  searchField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.paper,
      '& fieldset': {
        borderColor: theme.palette.background.default,
      },
    },
  },
}))
