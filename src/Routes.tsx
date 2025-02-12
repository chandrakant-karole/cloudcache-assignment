import { Routes, Route } from "react-router";
import NavigationBar from "./components/navbar/NavigationBar";
import LandingIndex from "./pages/landing";
import Footer from "./components/footer/Footer";

export default function AppRoutes() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingIndex />} />
        <Route path="/login" element={<h1>Check</h1>} />
      </Routes>
      <Footer />
    </>
  )
}
