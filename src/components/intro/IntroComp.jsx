import React, {useState} from 'react'
import './IntroStyle.scss'
import { useNavigate, Navigate } from 'react-router-dom';

export default function Intro() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 5000);
  const navigate = useNavigate();
  return redirectNow ? (
    <Navigate to="/games" />
  ) : (
    <div className='intro' onClick={() => navigate('/games')} >
      <p id='intoTXT'>API project by: Ctrl C + Ctrl V</p>
      </div>
  )
}
