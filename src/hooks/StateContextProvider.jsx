import React from 'react';
import  { createContext, useContext, useState }  from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search55.p.rapidapi.com';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': 'fec459d9f2mshbfd30361d7b36a3p10d3a8jsn2b8bafa1e350',
        'X-RapidAPI-Host': 'google-search55.p.rapidapi.com'
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
