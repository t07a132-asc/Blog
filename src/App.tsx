import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails"; // 1. استدعاء الكومبوننت الجديد
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layout/MainLayout/MainLayout";

import Portrait from "./components/BlogComponent/Portrait/Portrait";
import Technology from "./components/BlogComponent/Technology/Technology";
import AllArticles from "./components/BlogComponent/AllArticles/AllArticles";
import Landscapes from "./components/BlogComponent/Landscapes/Landscapes";
import Equipment from "./components/BlogComponent/Equipment/Equipment";
import Lighting from "./components/BlogComponent/Lighting/Lighting";
import About from "./pages/About/About";

let router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { 
        path: "blog", 
        element: <Blog />, 
        children: [
          { path: "", element: <AllArticles /> },
          { path: "AllArticles", element: <AllArticles /> },
          { path: "portrait", element: <Portrait /> },
          { path: "Technology", element: <Technology /> },
          { path: "Lighting", element: <Lighting /> },
          { path: "Landscapes", element: <Landscapes /> },
          { path: "Equipment", element: <Equipment /> },
        ]
      },
      // 2. إضافة مسار صفحة تفاصيل المقال خارج الـ Sub-routes لتعرض بشكل مستقل
      { path: "blog/:slug", element: <BlogDetails /> },
       
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;