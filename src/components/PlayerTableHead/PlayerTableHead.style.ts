import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/material'

export const useStyles = makeStyles()((theme: Theme) => ({
  tableHeader: {
    textTransform: 'uppercase',
    '& .MuiTableCell-root': {
      color: theme.palette.text.secondary,
    },
    '& #won': {
      color: 'green',
    },
    '& #lost': {
      color: 'red',
    },
  },
}))
