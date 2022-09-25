import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/material'

export const useStyles = makeStyles()((theme: Theme) => ({
  pageDisplay: {
    color: theme.palette.text.secondary,
  },
}))
