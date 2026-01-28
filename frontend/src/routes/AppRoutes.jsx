import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import AllProjects from "../pages/AllProjects";
import Connect from "../pages/Connect";
import Details from "../pages/Details";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/project/:id" element={<Details />} />
    </Routes>
  );
}
