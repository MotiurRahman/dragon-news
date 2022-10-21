import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login/Login";
import Register from "../Components/Login/Register/Register";
import TermsAndCondition from "../Components/TermsAndCondition/TermsAndCondition";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(`http://localhost:8000/news`);
        },
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:8000/categories/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <Category></Category>
          </PrivateRoute>
        ),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            {" "}
            <News></News>{" "}
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:8000/news/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
    ],
  },
]);
