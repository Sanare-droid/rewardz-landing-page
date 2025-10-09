import { Routes, Route, Navigate } from "react-router-dom";
import Upload from "@/pages/Upload";
import Dashboard from "@/pages/Dashboard";

const OwnerRoutes = () => {
  return (
    <Routes>
      <Route path="upload" element={<Upload />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/owner/upload" replace />} />
    </Routes>
  );
};

export default OwnerRoutes;
