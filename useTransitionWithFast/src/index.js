import React, { useContext, useEffect, useState, useReducer, useTransition, startTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Spinner from 'react-bootstrap/Spinner';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? <Spinner /> :
        list.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div><App /></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
