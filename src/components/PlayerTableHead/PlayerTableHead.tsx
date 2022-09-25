import { TableHead } from '@mui/material'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import { useStyles } from './PlayerTableHead.style'
import { HeadCell } from './PlayerTableHead.interface'

export const PlayerTableHead = () => {
  const { classes } = useStyles()

  const headCells: readonly HeadCell[] = [
    {
      id: 'name',
      alignedCenter: false,
      small: false,
    },
    {
      id: 'nick',
      alignedCenter: false,
      small: false,
    },
    {
      id: 'age',
      alignedCenter: true,
      small: false,
    },
    {
      id: 'country',
      alignedCenter: true,
      small: false,
    },
    {
      id: 'won',
      alignedCenter: true,
      small: true,
    },
    {
      id: 'drawn',
      alignedCenter: true,
      small: true,
    },
    {
      id: 'lost',
      alignedCenter: true,
      small: true,
    },
  ]

  return (
    <TableHead>
      <TableRow className={classes.tableHeader}>
        <TableCell width={100} />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignedCenter ? 'center' : 'left'}
            width={headCell.small ? 50 : undefined}
            id={headCell.id}
          >
            {headCell.id}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
