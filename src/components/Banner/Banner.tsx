import Container from "../ui/Container";

const Banner = () => {
  return (
    <Container>
      <div>
        <h2 className="text-9xl">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Gears
          </span>
          <br /> and <span>Euipments</span> <br /> for <span>Workout</span>?{" "}
          <br />
          <span>Done</span>
        </h2>
      </div>
    </Container>
  );
};

export default Banner;
