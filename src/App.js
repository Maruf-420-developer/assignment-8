import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/layout/Main";
import Javascript from "./components/Javascript/Javascript";
import React from "./components/React/React";
import Css from "./components/Css/Css";
import Git from "./components/Git/Git";
import Services from "./components/Services/Services";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "javascript",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/2`);
          },
          element: <Javascript></Javascript>,
        },
        {
          path: "react",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/1`);
          },
          element: <React></React>,
        },
        {
          path: "css",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/4`);
          },
          element: <Css></Css>,
        },
        {
          path: "git",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/5`);
          },
          element: <Git></Git>,
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
        },
      ],
    },
    {
      path: "*",
      element: <div className="not-found">This route not found......</div>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
