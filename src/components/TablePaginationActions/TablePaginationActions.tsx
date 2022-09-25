import { MouseEvent } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'

import { TablePaginationActionsProps } from './TablePaginationActions.interface'
import { useStyles } from './TablePaginationActions.style'

export const TablePaginationActions = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
}: TablePaginationActionsProps) => {
  const { classes } = useStyles()

  const handleFirstPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  const isPrevDisabled = !count || page === 0
  const isNextDisabled = !count || page >= Math.ceil(count / rowsPerPage) - 1

  return (
    <Box flexDirection="row" display="flex" alignItems="center">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={isPrevDisabled}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={isPrevDisabled}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <Box className={classes.pageDisplay}>
        {count ? `Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}` : ``}
      </Box>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={isNextDisabled}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={isNextDisabled}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  )
}
