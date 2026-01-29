import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Details from "../pages/Details";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Details />} />
    </Routes>
  );
}
