import { Routes, Route, Navigate } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Concept } from "./components/Concept";
import { ParallaxBanner } from "./components/ParallaxBanner";
import { WhyOliv } from "./components/WhyOliv";
import { Gallery } from "./components/Gallery";
import { Investment } from "./components/Investment";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import { Gracias } from "./pages/Gracias";
import { SESSION_KEY } from "./components/HubSpotForm";
import { Toaster } from "sonner";
import "../styles/fonts.css";

const Home = () => (
  <div className="bg-[#fcfcfb] min-h-screen font-sans selection:bg-[#6a1533] selection:text-white">
    <Navbar />
    <Hero />
    <Concept />
    <ParallaxBanner />
    <WhyOliv />
    <Gallery />
    <Investment />
    <LeadForm />
    <Footer />
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const params = new URLSearchParams(window.location.search);
  const fromHubSpot = params.get("hs") === "1";
  const fromSession = sessionStorage.getItem(SESSION_KEY) === "true";

  if (fromHubSpot) {
    sessionStorage.setItem(SESSION_KEY, "true");
    // Limpiar la URL para que quede /gracias sin parámetros
    window.history.replaceState({}, "", "/gracias");
    return <>{children}</>;
  }

  if (fromSession) return <>{children}</>;

  return <Navigate to="/" replace />;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/gracias"
          element={
            <ProtectedRoute>
              <Gracias />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
