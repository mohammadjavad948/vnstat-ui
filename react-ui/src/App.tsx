import React, {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {

    // @ts-ignore
      window.api.interfaces()
        .then((data: any) => {
          console.log(data);
          let nd = data.split(' ');
          nd.splice(0, 2)
          nd.splice(nd.length - 1, 1)
          console.log(nd)
        })
        .catch(console.log);

      //@ts-ignore
    window.api.getData(['-i', 'wlp2s0'])
          .then((data) => {
              console.log(data);
          })
          .catch(console.log)
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
