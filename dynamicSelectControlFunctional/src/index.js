import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

function FlavorForm(props) {
  const [value, setValue] = useState(null);
  const flavors = props.flavors;


  function handleSubmit(e) {
    alert(`Your favorite flavor is: ${value}`);
    e.preventDefault();
  }

  function handleSelectChange(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor: <br />
        <select value={value} onChange={handleSelectChange} defaultValue={value}>
          {flavors.map((flavor, index) => {
            return (
              <option key={index} value={flavor}>
                {flavor}
              </option>)
          })}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

const flavors = [null, "grapefruit", "lime", "coconut", "mango"];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div><FlavorForm flavors={flavors} /></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
