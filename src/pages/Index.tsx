import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Recruitment from "@/components/Recruitment";
import RemoteCulture from "@/components/RemoteCulture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main>
        <Hero />
        <Expertise />
        <Recruitment />
        <RemoteCulture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
