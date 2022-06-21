
import Home from './Home.jsx';
import { CommitsContext} from "./helpers/CommitsContext";
import { useState } from 'react';

function App() {
  const [commits, setCommits] = useState(() => []);
  return (
    <div className="App">
      <CommitsContext.Provider value={{commits, setCommits}}>    
          <Home />
      </CommitsContext.Provider>     
    </div>
  );
}

export default App;
