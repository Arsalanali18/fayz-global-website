import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { CourseDetail } from "./pages/CourseDetail";
import { About } from "./pages/About";
import { SuccessStories } from "./pages/SuccessStories";
import { Blog } from "./pages/Blog";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/courses",
    Component: Courses,
  },
  {
    path: "/courses/:id",
    Component: CourseDetail,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/success-stories",
    Component: SuccessStories,
  },
  {
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/shop",
    Component: Shop,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
