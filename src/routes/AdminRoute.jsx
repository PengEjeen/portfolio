import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
  const role = localStorage.getItem("role");
  return role === "admin" ? <Outlet /> : <Navigate to="/login" />;
}
export default AdminRoute;