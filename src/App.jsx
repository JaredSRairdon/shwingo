import { useState, useEffect } from 'react'
import { supabase } from './apis/supabaseClient'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';
import Auth from './pages/Account/Auth'
import AccountDetails from './pages/Account/AccountDetails'
import GamePage from './pages/GamePage/GamePage';
import './App.css'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      <Router>
        <div className="container">
          <NavigationBar session={session}/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="account" element={!session ? <Auth /> : <AccountDetails key={session.user.id} session={session} />}/>
            <Route path="games/:hyphenTitle" element={<GamePage/>} />
          </Routes>
        </div>
      </Router>



    </>

  )
}


export default App
