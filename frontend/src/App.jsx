import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { getProjects } from "./api/project.api";
import { useState, useEffect } from "react";

export default function App() {
  const [result, setresult] = useState([]);

  useEffect(() => {
    // console.log(getProject.then(res => res.data.Projects))
    getProjects().then((res) => setresult(res.data.Projects));

    console.log(result);
  });

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <AppRoutes />
      </main>
    </>
  );
}
