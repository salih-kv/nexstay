const Hero = () => {
  return (
    <div className="hero-bg w-full h-[500px] relative overflow-hidden flex flex-col justify-center -z-50">
      <div className="container px-4 mx-auto flex flex-col gap-2">
        <h1 className="text-5xl text-white font-bold">Find your next stay</h1>
        <p className="text-2xl text-white">
          Search low prices on hotels for your dream vacation...
        </p>
      </div>
      <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-transparent -z-40"></div>
    </div>
  );
};

export default Hero;
