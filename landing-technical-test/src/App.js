
import Home from './Home.jsx';
import './App.css';
import { CommitsContext} from "./helpers/CommitsContext";
import { useState } from 'react';

function App() {
  const [commits, setCommits] = useState(() => []);
  return (
    <div className="App">
      <section className="contenedor">
      <CommitsContext.Provider value={{commits, setCommits}}>    
          <Home />
      </CommitsContext.Provider>  
      </section>   
    </div>
  );
}

export default App;
