import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import Header from './Components/Navbar/Header';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <div></div>,
      }
    ],
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider  router={route}/>
    </div>
  );
}

export default App;
