import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sports from "./components/Sports";
import Schedule from "./components/Schedule";
import VideoHighlights from "./components/VideoHighlights";
import Gallery from "./components/Gallery";
import HallOfFame from "./components/HallOfFame";
import Community from "./components/Community";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />             {/* dark — full-bleed brand image */}
        <About />            {/* white */}
        <Sports />           {/* light grey */}
        <Schedule />         {/* light blue-grey */}
        <VideoHighlights />  {/* light grey — YouTube highlights */}
        <Gallery />          {/* dark — photo/video grid */}
        <HallOfFame />       {/* dark — S1 & S2 champions */}
        <Community />        {/* light green */}
        <Sponsors />         {/* white */}
      </main>
      <Footer />
    </>
  );
}
