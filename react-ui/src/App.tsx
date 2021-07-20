import React, {useEffect} from 'react';
import './App.css';
import YouAreNotRunningOnElectron from "./component/YouAreNotRunningOnElectron";

function App() {

  useEffect(() => {

  }, []);

  return (
    <div>
      <YouAreNotRunningOnElectron />
    </div>
  );
}

export default App;
