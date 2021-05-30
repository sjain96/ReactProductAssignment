import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ItemOperation from './Components/ItemOperations';
function App() {

  const [state, setState] = useState({
    data: {},
    errorMessage: '',
  });
  
  useEffect(() => {
    (function () {
      axios.get(`http://my-json-server.typicode.com/habilelabs/fake-products/products`)
        .then(res => {
          setState(() => {
            return {
              data: res.data
            }
          })
        })
        .catch(error => {
          setState(() => {
            return {
              errorMessage: error.message
            }
          })
        });
    })();
  }, []);

  
  if (Object.keys(state.data).length === 0) {
    return (
      <h1>OOPS, something went wrong</h1>
    )
  }

  return (
    <div className="App">
      <ItemOperation data={state.data} />    
    </div>
  );
}

export default App;
