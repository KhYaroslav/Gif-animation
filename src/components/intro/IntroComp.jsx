import React from 'react'
import './IntroStyle.scss'
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className='intro' onClick={() => navigate('/games')} >
      <p id='intoTXT'>API project by: Ctrl C + Ctrl V</p>
      </div>
  )
}
