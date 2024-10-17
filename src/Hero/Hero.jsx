import PropTypes from "prop-types";
import HeroImage from "../assets/HeroImage.png";
const Hero = () => {
  return (
    <>
      <div className="px-4">
        <div
          className="container mx-auto relative hero md:min-h-[600px] min-h-[500px] border rounded-xl overflow-hidden"
          style={{ backgroundImage: `url('${HeroImage}')` }}
        >
          <div className="absolute inset-0 bg-custom-gradient"></div>
          <div className="hero-content text-white text-center">
            <div className="md:w-3/4">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <button className="px-4 py-2 text-black hover:text-white bg-mr-button-success rounded-3xl border-2 border-transparent hover:border-white hover:bg-transparent">
                  Explore Now
                </button>
                <button className="px-4 py-2 text-white hover:text-black hover:bg-mr-button-success rounded-3xl border-2 hover:border-transparent">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  isVisited: PropTypes.bool.isRequired,
};

export default Hero;
