import { Outlet } from "react-router";
import { useState } from "react";
import { Header } from "./components";

function App() {
  const [activeGenre, setActiveGenre] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Header activeGenre={activeGenre} setActiveGenre={setActiveGenre} page={page} setPage={setPage} />
      <Outlet context={[activeGenre, setActiveGenre, page, setPage]} />
    </div>
  );
}

export default App;
