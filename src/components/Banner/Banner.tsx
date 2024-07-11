import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Banner = () => {
  return (
    <Container>
      <div className="py-2 text-center">
        <div className="hidden md:block">
          <h2 className="text-[100px] font-bold leading-none md:text-[115px] lg:text-[150px] xl:text-[180px]">
            <span className="text-gray-200">WORKOUT </span>
            <br />
            <span className="bg-gradient-to-r from-rose-400 to-blue-500 bg-clip-text text-transparent">
              EQUIPMENTS
            </span>{" "}
            <br />
            <span className="text-gray-200">FOR</span>{" "}
            <span className="text-gray-200">SELL</span>
          </h2>
        </div>
        <div className="md:hidden">
          <h2 className="text-[57px] font-bold leading-none sm:text-[100px]">
            <span className="text-gray-200">WORKOUT </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">
              GEARS <br />
            </span>
            <span className="text-gray-200">FOR</span>{" "}
            <span className="text-gray-200">SELL</span>
          </h2>
        </div>
        <div>
          <Link to="/products">
            <button className="btn btn-lg my-10 rounded-none bg-gradient-to-r from-rose-500 to-blue-600 text-white hover:from-rose-600 hover:to-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
