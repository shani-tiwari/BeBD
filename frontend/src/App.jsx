import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 w-full bg-gray-900 min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
