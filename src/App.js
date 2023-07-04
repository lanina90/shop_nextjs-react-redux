import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import NotFound from "./pages/NotFound";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "./components/NavBar";
import {check} from "./http/userAPI";
import {setIsAuth, setUser} from "./redux/slices/userSlice";
import {Spinner} from "react-bootstrap";

function App() {
  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.user)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      dispatch(setUser(true))
      dispatch(setIsAuth(true))
    })
      .finally(() => setLoading(false))
  }, [])

  if(loading) {
    return <Spinner animation={'grow'}/>
  }

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
