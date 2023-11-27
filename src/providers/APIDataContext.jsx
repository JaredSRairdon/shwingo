import React, { createContext, useEffect, useState } from 'react';
import { supabase } from './../apis/supabaseClient'

const APIDataContext = createContext();

const APIDataContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [gameList, setGameList] = useState([]);
  
    useEffect(() => {
      let ignore = false
      async function getGameList() {
        setLoading(true)
  
        let { data, error } = await supabase
          .from('games')
          .select('*')
  
        if (!ignore) {
          if (error) {
            console.warn(error)
          } else if (data) {
            setGameList(data)
            console.log(data)
          }
        }
  
        setLoading(false)
      }
  
      getGameList()
  
      return () => {
        ignore = true
      }
  
    }, [])

    // Provides the game state and actions to consuming components
    const contextValue = {
        gameList,
        loading
    };

    return (
        <APIDataContext.Provider value={contextValue}>
            {children}
        </APIDataContext.Provider>
    );
}

export { APIDataContext, APIDataContextProvider };