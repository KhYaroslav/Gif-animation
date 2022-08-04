import { GiphyFetch } from '@giphy/js-fetch-api';
import React, { useState } from 'react';
import TextList from './components/giphy/GiphyList';
import Error from './components/error/Error';
import Background from './components/background/Background';
import Button from './components/button/Button';
import './App.css';
import './components/background/Background.scss';

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

function App() {
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
        <Button handleSubmit={handleSubmit} />
        <Error isError={err} text="Длина ввода должна больше 0" />
        {results && <TextList gifs={results} />}
      </div>
    </div>

  );
}
export default App;
