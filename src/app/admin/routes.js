import Dashboard from "./screens/Dashboard";
import AddItem from "./screens/AddItem";

const adminRoutes = [
  {
    path: "",
    component: Dashboard
  },
  {
    path: "add-item",
    component: AddItem
  }
];

export default adminRoutes;
