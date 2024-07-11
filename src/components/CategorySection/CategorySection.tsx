import { FaDumbbell, FaHeartbeat, FaRunning } from "react-icons/fa";
import { TbTreadmill } from "react-icons/tb";
import { FaBottleWater } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const CategorySection = () => {
  //for aos animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const categories = [
    { name: "weights", icon: FaDumbbell },
    { name: "fitness", icon: FaHeartbeat },
    { name: "hydration", icon: FaBottleWater },
    { name: "cardio", icon: FaRunning },
    { name: "Accessories", icon: GiGymBag },
    { name: "treadmills", icon: TbTreadmill },
  ];

  return (
    <Container>
      <div className="pb-10 pt-5">
        <h2 className="pb-14 text-center text-5xl font-bold">
          Shop by Category
        </h2>
        <div
          data-aos="fade-right"
          className="grid grid-cols-2 gap-5 md:grid-cols-3"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products?category=${category.name}`}
              className="flex flex-col items-center rounded-lg bg-transparent p-4 shadow outline outline-1 transition hover:bg-gray-100 hover:text-[#1e2054]"
            >
              <category.icon size="3em" className="mb-2" />
              <span className="mt-2 text-lg font-semibold capitalize">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategorySection;
