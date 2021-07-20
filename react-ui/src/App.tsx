import React from 'react';
import YouAreNotRunningOnElectron from "./component/YouAreNotRunningOnElectron";
import {useIsElectron} from "./hooks/electron";
import Container from "./Container";

function App() {

  const isElectron = useIsElectron();

  return (
    <div>
      {!isElectron && <YouAreNotRunningOnElectron />}
      {isElectron && <Container />}
    </div>
  );
}

export default App;
