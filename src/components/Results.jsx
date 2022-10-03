import React from 'react'
import { useLocation } from 'react-router-dom'

const Results = () => {
    const { getResults, results, search, setSearch, loading } = useStateContext()
    const location = useLocation();
    if(loading)
    {
        return(
            <Loading/>
        )
    }
  return (
    <div>Results</div>
  )
}

export default Results