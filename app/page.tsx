import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sports from "./components/Sports";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Community from "./components/Community";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />       {/* white section */}
        <Sports />      {/* dark navy section */}
        <Schedule />    {/* darkest navy section */}
        <Gallery />     {/* dark section */}
        <Community />   {/* dark navy section */}
        <Sponsors />    {/* white section */}
      </main>
      <Footer />
    </>
  );
}
