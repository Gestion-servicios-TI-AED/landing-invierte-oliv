import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router";
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
import { Toaster } from "sonner";
import "../styles/fonts.css";

const SESSION_KEY = "oliv_form_submitted";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Log abierto — captura todo para debug
      console.log("[MSG]", event.origin, event.data);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
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
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const granted = sessionStorage.getItem(SESSION_KEY);
  if (!granted) return <Navigate to="/" replace />;
  return <>{children}</>;
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
