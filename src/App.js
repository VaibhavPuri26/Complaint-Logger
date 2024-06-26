import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import ComplaintLogger from "./components/ComplaintLogger";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/complaint-logger",
      element: <ComplaintLogger />,
    },
    {
      path: "/admin-dashboard",
      element: <AdminDashboard />,
    },
    {
      path: "/",
      element: <Login />, // Default route to login page
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
