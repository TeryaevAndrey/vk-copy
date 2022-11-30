import Home from "../pages/Home/Home"

export const routes = [
  {
    path: "/",
    component: Home,
    auth: false
  },
  {
    path: "/profile/:id",
    component: Home,
    auth: true
  },
  {
    path: "/messages",
    component: Home,
    auth: true
  },
  {
    path: "/message/:id",
    component: Home,
    auth: true
  },
  {
    path: "/friends/:id",
    component: Home,
    auth: true
  },
  {
    path: "/auth",
    component: Home,
    auth: false
  }
]