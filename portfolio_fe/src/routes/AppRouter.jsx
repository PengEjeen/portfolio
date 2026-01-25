import { Navigate, Route, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import Layout from "../layouts/Layout";
import AdminDashboard from "../pages/AdminDashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
