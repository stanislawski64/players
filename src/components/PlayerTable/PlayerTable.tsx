import { MouseEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { CircularProgress, Divider, Toolbar, Typography } from '@mui/material'

import { ReactComponent as LogoSecondary } from '../../logos/logoSecondary.svg'
import { useGetPlayers } from '../../hooks/useGetPlayers'
import { TablePaginationActions } from '../TablePaginationActions/TablePaginationActions'
import { PlayerTableHead } from '../PlayerTableHead/PlayerTableHead'

import { useStyles } from './PlayerTable.styles'

export const PlayerTable = () => {
  const { classes } = useStyles()
  const [page, setPage] = useState(0)
  const rowsPerPage = 20

  const { data = { content: [] }, isLoading } = useGetPlayers(page, setPage)

  const rows = data.content

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const renderGameResults = (games: Array<'W' | 'D' | 'L'> = []) => {
    const results = { W: 0, D: 0, L: 0 }
    games.forEach((result) => {
      results[result] += 1
    })
    return (
      <>
        <TableCell align="center">{results.W}</TableCell>
        <TableCell align="center">{results.D}</TableCell>
        <TableCell align="center">{results.L}</TableCell>
      </>
    )
  }

  const renderRows = () => {
    if (isLoading)
      return (
        <TableRow>
          <TableCell colSpan={8}>
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          </TableCell>
        </TableRow>
      )
    if (rows.length)
      return rows.map((row: any) => (
        <TableRow key={row.id}>
          <TableCell className={classes.logoCell}>
            <Box height={1} display="flex">
              <Box
                height={1}
                width={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <LogoSecondary />
              </Box>
              <Divider orientation="vertical" className={classes.divider} />
            </Box>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell>{row.nick}</TableCell>
          <TableCell align="center">
            {new Date().getFullYear() - row.birthYear}
          </TableCell>
          <TableCell align="center">
            <Box display="flex" justifyContent="center">
              <img
                alt={row.country}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${row.country.toUpperCase()}.svg`}
                className={classes.imageSize}
              />
            </Box>
          </TableCell>
          {renderGameResults(row.team.lastResults)}
        </TableRow>
      ))
    return (
      <TableRow>
        <TableCell colSpan={8}>
          <Box display="flex" justifyContent="center">
            No players found
          </Box>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <Box width={1} padding={5} m={0}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography className={classes.tableTitle} variant="h6">
          Players
        </Typography>
      </Toolbar>
      <TableContainer className={classes.tableBorder}>
        <Table className={classes.table} aria-label="players table">
          <PlayerTableHead />
          <TableBody className={classes.tableBody}>{renderRows()}</TableBody>
          <TableFooter>
            <TableRow className={classes.tableFooter}>
              <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                colSpan={8}
                count={data?.totalElements || 0}
                rowsPerPage={rowsPerPage}
                page={isLoading ? 0 : page}
                onPageChange={handleChangePage}
                ActionsComponent={TablePaginationActions}
                labelDisplayedRows={() =>
                  `${data?.numberOfElements || 0} per page`
                }
                className={classes.pagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  )
}
