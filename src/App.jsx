import { useState, useEffect } from 'react'
import { createClient } from "@supabase/supabase-js"
import './App.css'

const supabase = createClient("https://jwvbdcxfjcsrjkybmhyq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dmJkY3hmamNzcmpreWJtaHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MTQ0OTEsImV4cCI6MjAxNjA5MDQ5MX0.HuMSoz_v4hCu43teLOFQAdiWmEYrsjcbO-Os3WLH7hs");

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  async function getGames() {
    const { data } = await supabase.from("games").select();
    setGames(data);
  }

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.title}>
            {game.title}<br/>
            {game.description}
          </li>
        ))}
      </ul>
    </>
  );
}


export default App
