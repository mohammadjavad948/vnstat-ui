import React, {useEffect} from 'react';
import YouAreNotRunningOnElectron from "./component/YouAreNotRunningOnElectron";
import {useIsElectron} from "./hooks/electron";

function App() {

  const isElectron = useIsElectron();

  useEffect(() => {

  }, []);

  return (
    <div>
      {!isElectron && <YouAreNotRunningOnElectron />}
    </div>
  );
}

export default App;
