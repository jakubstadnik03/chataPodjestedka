import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AccommodationSection from "./components/AccomodationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavbarComponent from "./components/Navbar";
import WhatsIncluded from "./components/WhatsIncluded";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeroSection />
      <WhatsIncluded />
      <AccommodationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
