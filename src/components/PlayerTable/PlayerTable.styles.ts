import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/material'

export const useStyles = makeStyles()((theme: Theme) => ({
  tableBody: {
    '& .MuiTableRow-root': {
      height: '80px',
    },
    '& .MuiTableCell-root': {
      fontSize: '1em',
    },
  },
  pagination: {
    '& .MuiTablePagination-spacer': {
      display: 'none',
    },
    '& .MuiTablePagination-displayedRows': {
      color: theme.palette.text.secondary,
    },
    '& .MuiToolbar-root': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  tableTitle: { fontSize: 'small', textTransform: 'uppercase' },
  toolbar: {
    background: 'linear-gradient(to bottom, #1b1f31, #24293e)',
    width: '100%',
  },
  tableBorder: {
    '& .MuiTableCell-root': {
      borderColor: theme.palette.divider,
    },
  },
  table: { minWidth: 750 },
  tableFooter: {
    '&:last-child td': {
      border: 0,
      backgroundColor: '#1e2335',
      padding: theme.spacing(1),
    },
  },
  logoCell: { padding: '0px', height: '80px' },
  divider: { height: '60%', margin: 'auto' },
  imageSize: { height: '1.5em' },
}))
