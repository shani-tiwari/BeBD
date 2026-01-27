import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
    <div className="h-screen w-screen bg-neutral-700">

      <Navbar/>
      <AppRoutes/>
    </div>
    </>
  )
}
