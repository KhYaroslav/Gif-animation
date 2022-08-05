import React from 'react'
import { Link } from 'react-router-dom';
import './Welcome.scss';

export default function Welcome() {
  return (
    <div className='welcome'>
    <div id="typedStrings">
    <p>by KH.Yaroslav</p>
    <p>Api project <Link className='logotip' to="/games" target="_blank" rel="noreferrer"><i className='fa fa-codepen'></i></Link></p>
  </div>
      <span id="span"></span>
      </div>
  )
}
