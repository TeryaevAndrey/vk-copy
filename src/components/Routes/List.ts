import Auth from "../pages/Auth/Auth"
import Friends from "../pages/Home/Friends/Friends"
import Home from "../pages/Home/Home"
import Conversation from "../pages/Messages/Conversation"
import Messages from "../pages/Messages/Messages"
import Profile from "../pages/Profile/Profile"

export const routes = [
  {
    path: "/",
    component: Home,
    auth: false
  },
  {
    path: "/profile/:id",
    component: Profile,
    auth: true
  },
  {
    path: "/messages",
    component: Messages,
    auth: true
  },
  {
    path: "/message/:id",
    component: Conversation,
    auth: true
  },
  {
    path: "/friends/:id",
    component: Friends,
    auth: true
  },
  {
    path: "/auth",
    component: Auth,
    auth: false
  }
]