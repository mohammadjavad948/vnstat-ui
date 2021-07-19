import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    //@ts-ignore
    window.api.interfaces()
        .then((data: any) => {
          console.log(data);
          let nd = data.split(' ');
          nd.splice(0, 2)
          nd.splice(nd.length - 1, 1)
          console.log(nd)
        })
        .catch(console.log)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
