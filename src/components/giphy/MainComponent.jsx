import { GiphyFetch } from '@giphy/js-fetch-api';
import React, { useState } from 'react';
import GiphyList from './GiphyList';
import Error from '../error/Error';
import Background from '../background/Background';
// import Button from '../button/Button';
import './App.css';
import '../background/Background.scss';

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
console.log("🚀 ~ file: MainComponent.jsx ~ line 11 ~ giphy", giphy)



export default function MainComponent() {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [err, setErr] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.length === 0) {
      setErr(true);
      return;
    }
    console.log(text);
    const apiCall = async () => {
      const res = await giphy.animate(text, { limit: 10 });
      
      setResults(res.data);
    };
    apiCall();
    setText('');
    setErr(false);
  };

  return (
    <div className="App">
      <Background />
      <div className="Wrapper">
        <h1>Генератор анимированного текста</h1>
        <h3>Введите текст:</h3>
        <input className="input-field" value={text} onChange={handleInput} />
        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        {/* <Button handleSubmit={handleSubmit} /> */}
        <Error isError={err} text="Длина ввода должна больше 0" />
        {results && <GiphyList gifs={results} />}
      </div>
    </div>

  );
}
