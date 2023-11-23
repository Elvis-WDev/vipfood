import "./assets/Main.scss"

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Navbar, Footer } from "./components/index";
import { Home, Game } from "./pages/index";

const Layout = () => {

  return (

    <div className="app">

      <Navbar />
      <Outlet />
      <Footer />

    </div>

  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/game",
        element: <Game />
      },
    ]
  }
])


function App() {

  return (

    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>

  )
}

export default App
