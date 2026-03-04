import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sports from "./components/Sports";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Community from "./components/Community";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sports />
        <Schedule />
        <Gallery />
        <Contacts />
        <Community />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
