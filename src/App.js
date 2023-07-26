import { Outlet } from 'react-router';
import { useState } from 'react';
import { Header } from './components';

function App() {
  const [activeGenre, setActiveGenre] = useState(null);

  return (
    <div className="App">
      <Header activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <Outlet context={[activeGenre, setActiveGenre]}/>
    </div>
  );
}

export default App;
