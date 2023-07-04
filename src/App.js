import React from "react";
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import NotFound from "./pages/NotFound";
import {useSelector} from "react-redux";
import NavBar from "./components/NavBar";

function App() {
  const {isAuth} = useSelector(state => state.user)
  console.log(isAuth);
  return (
    <>
      <NavBar/>
      <Routes>
        {isAuth && authRoutes.map(({path, element}) =>
          <Route key={path} path={path} element={element}/>
        )}
        {publicRoutes.map(({path, element}) =>
          <Route key={path} path={path} element={element}/>
        )}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
