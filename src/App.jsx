import {
  Loader,
  NavBar,
  Sidebar,
  Hero,
  About,
  Projects,
  Testimonials,
  Footer,
  Contact,
  TechStack,
} from "./sections";

const App = () => {
  return (
    <div className="bg-black-100">
      <Loader />
      <NavBar />
      <Sidebar />
      <Hero />
      <About />
      {/* <TechStack /> */}
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
