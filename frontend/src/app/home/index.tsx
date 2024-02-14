import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="container px-4">
        <SearchBar />
      </div>
      <div className="container mx-auto py-10 px-4 flex-1">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">Latest Destinations</h2>
          <p>Most recent destinations added by our hosts</p>
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {/* Latest Destination Card */}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Latest Destination Card */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
