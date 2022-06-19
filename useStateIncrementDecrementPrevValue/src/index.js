import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class ChatAPI extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id: 0 };
  }

  subscribeToFriendStatus(id, handleStatusChange) {

  }

  unsubscribeFromFriendStatus(id, handleStatusChange) {

  }
}

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <div>Count: {count}</div>
      <div><button onClick={()=>setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={()=>setCount(prevCount => prevCount + 1)}>+</button></div>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div><Counter initialCount={0}/></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
