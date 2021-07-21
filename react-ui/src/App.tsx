import React from 'react';
import YouAreNotRunningOnElectron from "./component/YouAreNotRunningOnElectron";
import {useIsElectron} from "./hooks/electron";
import Container from "./Container";
import TopBar from "./component/topbar/TopBar";

function App() {

  const isElectron = useIsElectron();

  return (
    <div>
      {isElectron && <TopBar />}
      {!isElectron && <YouAreNotRunningOnElectron />}
      {isElectron && <Container />}
    </div>
  );
}

export default App;
