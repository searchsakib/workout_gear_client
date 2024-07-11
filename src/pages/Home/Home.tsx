import Banner from "@/components/Banner/Banner";
import CategorySection from "@/components/CategorySection/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="overflow-x-hidden text-3xl text-white">
      <Helmet>
        <title>Workout Gear | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <CategorySection></CategorySection>
      </div>
      <div>
        <FeaturedProducts></FeaturedProducts>
      </div>
    </div>
  );
};

export default Home;
