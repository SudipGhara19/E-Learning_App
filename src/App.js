import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorToast from "./components/error-toast/ErrorToast";
import Details from "./pages/app/details/Details"
import Learn from "./pages/app/learn/Learn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav/>,
      errorElement: <ErrorToast/>,
      children: [
        {index: true, element: <Hero/>},
        {path: "/courses", 
          children: [
            {index: true, element: <Courses/>},
            {path: ":courseId", element: <Details/>}
          ],
        },
        {path: "/learn/:courseId", element: <Learn/>}
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
