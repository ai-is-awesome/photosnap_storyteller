import { Outlet } from "react-router-dom";
import Navbar from "./features/Navbar/Navbar";
import "./stylesheets/main.scss";
import { useMediaQuery } from 'react-responsive'

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  
  return (
    <>
      <div className="App">
        <Navbar isDesktop={isDesktop} />
        <Outlet />
      </div>
    </>
  );
}

export default App;
