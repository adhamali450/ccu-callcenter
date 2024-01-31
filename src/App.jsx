import "./App.sass";
import Hero from "@sections/Hero";
import About from "@sections/About";
import Tools from "@sections/Tools";
import Packages from "@sections/Packages";
import Contact from "@sections/contact/Contact";
import Footer from "@components/Footer";
import { Toaster } from "react-hot-toast";

import imgAgent from "@assets/agent-hero.webp";

function App() {
  return (
    <div className="relative overflow-hidden">
      <img
        className="absolute hidden plg:block top-[130px] right-0 w-1/3 max-w-[500px] aspect-square rounded-l-3xl border-[4px] border-r-0 object-cover"
        src={imgAgent}
        alt="An image of call center agent"
      />

      <Hero />

      <About />

      <Tools />

      <Packages />

      <Contact />

      <Footer />

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
