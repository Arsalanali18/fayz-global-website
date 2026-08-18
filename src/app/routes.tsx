import { createBrowserRouter, Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { CourseDetail } from "./pages/CourseDetail";
import { DiplomaCourse } from "./pages/DiplomaCourse";
import { About } from "./pages/About";
import { SuccessStories } from "./pages/SuccessStories";
import { Blog } from "./pages/Blog";
import { BlogDetail } from "./pages/BlogDetail";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";

/* Root Layout */
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "courses/:id",
        Component: CourseDetail,
      },
      {
        path: "diploma-hijama-therapy",
        Component: DiplomaCourse,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "success-stories",
        Component: SuccessStories,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "blog/:id",
        Component: BlogDetail,
      },
      {
        path: "shop",
        Component: Shop,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "faq",
        Component: FAQ,
      },
    ],
  },
]);
