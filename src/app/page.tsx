import Connect from "@/components/Connect";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const Home: React.FC = () => {
  return (
    <div className="px-4 py-8 overflow-x-hidden lg:px-12  flex flex-col">
      <Hero />
      <Portfolio />
      <Experience />
      <Connect />
    </div>
  );
};

export default Home;
