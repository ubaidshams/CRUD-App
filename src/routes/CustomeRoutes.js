import React from "react";
import { useRoutes } from "react-router-dom";
import CreatePost from "../components/post/CreatePost";
import DeletePost from "../components/post/DeletePost";
import EditPost from "../components/post/EditPost";
import Post from "../components/post/Post";
import Home from "../pages/Home";

const CustomeRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/posts",
      element: <Post />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create-post",
      element: <CreatePost />,
    },
    {
      path: "posts/edit-post/:id",
      element: <EditPost />,
    },
    {
      path: "/delete-post/:id",
      element: <DeletePost />,
    },
  ]);
  return myRoutes;
};

export default CustomeRoutes;
