import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext();
const baseURL = 'https://google-search-5.p.rapidapi.com/google/'
const ResultContexts = ({children}) => {
    const[results,setResults] = useState([])
    const[loading,setLoading] = useState(false)
    const[search,setSearch] = useState('')

    const getResults = async(url) => {
        setLoading(true)
        const res = await fetch(`${baseURL}${url}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'fec459d9f2mshbfd30361d7b36a3p10d3a8jsn2b8bafa1e350',
                'X-RapidAPI-Host': 'google-search-5.p.rapidapi.com'
              }
        })

        const data = await res.json()
        setResults(data)
        setLoading(false)
    }
  return (
    <StateContext.Provider value={{ getResults, results, search, setSearch, loading }}>
      {children}
    </StateContext.Provider>
  )
}

export default ResultContexts

export const useStateContext = () => useContext(StateContext);