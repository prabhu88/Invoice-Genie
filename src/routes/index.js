import Dashboard from '../views/Dashboard'
import UserSettings from '../views/UserSettings'
const AdminRoutes = [
    // {
    //     upgrade: true,
    //     path: "/upgrade",
    //     name: "Upgrade to PRO",
    //     icon: "fa-solid fa-house",
    //     component: Upgrade,
    //     layout: "/admin"
    //   },
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/profile",
        name: "Profile",
        icon: "nc-icon nc-circle-09",
        component: UserSettings,
        layout: "/admin"
      },
      // {
      //   path: "/table",
      //   name: "Table List",
      //   icon: "nc-icon nc-notes",
      //   component: TableList,
      //   layout: "/admin"
      // },
      // {
      //   path: "/typography",
      //   name: "Typography",
      //   icon: "nc-icon nc-paper-2",
      //   component: Typography,
      //   layout: "/admin"
      // },
      // {
      //   path: "/icons",
      //   name: "Icons",
      //   icon: "nc-icon nc-atom",
      //   component: Icons,
      //   layout: "/admin"
      // },
      // {
      //   path: "/maps",
      //   name: "Maps",
      //   icon: "nc-icon nc-pin-3",
      //   component: Maps,
      //   layout: "/admin"
      // },
      // {
      //   path: "/notifications",
      //   name: "Notifications",
      //   icon: "nc-icon nc-bell-55",
      //   component: Notifications,
      //   layout: "/admin"
      // }
]
export default AdminRoutes;