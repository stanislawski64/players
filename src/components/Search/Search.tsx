import { Box, InputAdornment, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { useStyles } from './Search.styles'
import { SearchInterface } from './Search.interface'

export const Search = () => {
  const { classes } = useStyles()

  const [searchParams, setSearchParams] = useSearchParams()

  const onSubmit: SubmitHandler<SearchInterface> = (data) => {
    if (data.searchBy === '') setSearchParams({})
    else setSearchParams({ ...data })
  }

  const { register, handleSubmit } = useForm<SearchInterface>()

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        defaultValue={searchParams.get('searchBy')}
        {...register('searchBy')}
        size="small"
        fullWidth
        className={classes.searchField}
        placeholder="Search for teams, players, matches..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon opacity={0.25} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
