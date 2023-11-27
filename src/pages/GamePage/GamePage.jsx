import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../apis/supabaseClient'


function GamePage({ session }) {
  const { hyphenTitle } = useParams();

  return (
    <p>{hyphenTitle}</p>
  )
}

export default GamePage