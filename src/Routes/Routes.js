import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(`http://localhost:5000/news`);
        },
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/categories/${params.id}`);
        },
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
      },
    ],
  },
]);
