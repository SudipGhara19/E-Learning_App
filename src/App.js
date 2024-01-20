import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorToast from "./components/error-toast/ErrorToast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav/>,
      errorElement: <ErrorToast/>,
      children: [
        {index: true, element: <Hero/>},
        {path: "/courses", element:<Courses/>},
      ],
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
