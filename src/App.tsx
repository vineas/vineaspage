import { About } from "./components/Layout/About/index.tsx";
import { Footer } from "./components/Layout/Footer/index.tsx";
import Hero from "./components/Layout/Hero/index.tsx";
import { Navbar } from "./components/Layout/Navbar";
import { Portfolio } from "./components/Layout/Portfolio";
import { Skills } from "./components/Layout/Skills";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
};