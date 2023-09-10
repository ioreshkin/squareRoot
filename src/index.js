import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DocsPage from './components/pages/docsPage/docsPage';
import AbtPage from './components/pages/abtPage/abtPage';
import SupPage from './components/pages/supPage/supPage';
import UpdPage from './components/pages/updPage/updPage';

const router = createBrowserRouter([
  {
    path: "squareRoot/",
    element: <App/>,
  },
  {
    path: "squareRoot/docs",
    element: <DocsPage/>
  },
  {
    path: "squareRoot/about",
    element: <AbtPage/>
  },
  {
    path: "squareRoot/support",
    element: <SupPage/>
  },
  {
    path: "squareRoot/updates",
    element: <UpdPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  
);

