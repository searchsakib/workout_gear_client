import Container from "../ui/Container"; // Assuming you have a Container component
import benefitImage1 from "/images/benefit-image-1.jpg"; // Import your benefit images
import benefitImage2 from "/images/benefit-image-2.jpg"; // Adjust paths accordingly
import benefitImage3 from "/images/benefit-image-3.jpg"; // Adjust paths accordingly

const BenefitsSection = () => {
  return (
    <div className="py-16">
      <Container>
        <h2 className="mb-12 text-center text-5xl font-bold">Benefits</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center">
            <img
              src={benefitImage1}
              alt="Benefit 1"
              className="mb-4 rounded-lg shadow-lg"
            />
            {/* <h3 className="mb-4 text-2xl font-bold">Improved Performance</h3> */}
            <p className="text-center text-lg text-gray-100">
              Enhance your workouts with our equipments designed for maximum
              efficiency.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center">
            <img
              src={benefitImage2}
              alt="Benefit 2"
              className="mb-4 rounded-lg shadow-lg"
            />
            {/* <h3 className="mb-4 text-2xl font-bold">Increased Endurance</h3> */}
            <p className="text-center text-lg text-gray-100">
              Build endurance and stamina with our reliable products, tested for
              durability.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={benefitImage3}
              alt="Benefit 2"
              className="mb-4 rounded-lg shadow-lg"
            />
            {/* <h3 className="mb-4 text-2xl font-bold">Increased Endurance</h3> */}
            <p className="text-center text-lg text-gray-100">
              Achieve greater flexibility with our equipments, designed to
              enhance your overall agility.
            </p>
          </div>

          {/* Add more benefits as needed */}
        </div>
      </Container>
    </div>
  );
};

export default BenefitsSection;
