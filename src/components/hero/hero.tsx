import HeroContent from "./hero-content";
import ParticlesBackground from "./particles";

const Hero = () => {
  return (
    // <section className="h-screen w-full">
    <div className="w-full p-4 h-screen fixed z-0">
      <div
        className="relative w-full h-full overflow-hidden rounded-xl"
        id="hero-card"
      >
        <ParticlesBackground />
        <HeroContent />
      </div>
    </div>
    // </section>
  );
};

export default Hero;
