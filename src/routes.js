import AdminPanel from "./pages/AdminPanel";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";


export const authRoutes = [
  {
    path: '/admin',
    element: <AdminPanel/>
  },
  {
    path: '/basket',
    element: <Basket/>
  }
]

export const publicRoutes = [
  {
    path: '/login',
    element: <Auth/>
  },
  {
    path: '/registration',
    element: <Auth/>
  },
  {
    path: '/',
    element: <Shop/>
  },
  {
    path: '/device/:id',
    element: <DevicePage/>
  }

]