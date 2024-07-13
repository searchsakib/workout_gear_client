import Banner from "@/components/Banner/Banner";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import CategorySection from "@/components/CategorySection/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import useBeforeUnload from "@/hooks/useBeforeUnload";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  useBeforeUnload(cartItems);
  return (
    <div className="overflow-hidden text-3xl text-white">
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
      <div>
        <BenefitsSection></BenefitsSection>
      </div>
      <div>
        <ImageGallery></ImageGallery>
      </div>
    </div>
  );
};

export default Home;
