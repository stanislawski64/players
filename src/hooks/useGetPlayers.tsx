import { useSearchParams } from 'react-router-dom'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { SEARCH_PARAM_NAME } from '../constants'

export const useGetPlayers = (
  page: number,
  setPage: Dispatch<SetStateAction<number>>
) => {
  const [searchParams] = useSearchParams()
  const [searchBy, setSearchBy] = useState(
    searchParams.get(SEARCH_PARAM_NAME) || ''
  )

  useEffect(() => {
    setSearchBy(searchParams.get(SEARCH_PARAM_NAME) || '')
    setPage(0)
  }, [searchParams, setPage])

  const getPlayers = async () => {
    try {
      const queryParams = new URLSearchParams({ searchBy, page: `${page}` })
      const response = await fetch(
        `https://api.ggpredict.dev:8080/restapi/players?${queryParams}`
      )
      return await response.json()
    } catch (e) {
      return { content: [] }
    }
  }

  return useQuery(['players', searchBy, page], getPlayers, {
    refetchOnWindowFocus: false,
  })
}
