import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/install"
    },
    {
      path: "/",
      redirect: "/install"
    },
    {
      path: "/install",
      name: "Install",
      component: () => import("./pages/Install.md")
    },
    {
      path: "/Button",
      name: "Button",
      component: () => import("./pages/Button.md")
    },
    {
      path: "/Card",
      name: "Card",
      component: () => import("./pages/Card.md")
    },
    {
      path: "/Input",
      name: "Input",
      component: () => import("./pages/Input.md")
    },
    {
      path: "/Panel",
      name: "Panel",
      component: () => import("./pages/Panel.md")
    },
    {
      path: "/Select",
      name: "Select",
      component: () => import("./pages/Select.md")
    },
    {
      path: "/Sub",
      name: "Sub",
      component: () => import("./pages/Sub.md")
    }
  ]
})
