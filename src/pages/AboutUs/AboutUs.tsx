import Container from "@/components/ui/Container";
import teamImage1 from "/images/img1.png";
import teamImage2 from "/images/img2.png";
import teamImage3 from "/images/img3.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import useBeforeUnload from "@/hooks/useBeforeUnload";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const AboutUs = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  useBeforeUnload(cartItems);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Workout Gear | About Us</title>
      </Helmet>
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/about-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="p-3 text-6xl font-bold text-white outline">
            About Us
          </h1>
        </div>
      </div>

      {/* Company Overview */}
      <div data-aos="fade-up" className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-100">
              Company Overview
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              Workout Gear has been at the forefront of fitness innovation since
              its inception in 2010. Our mission is to provide high-quality gym
              equipment that helps individuals achieve their fitness goals. We
              envision a world where everyone has access to the best fitness
              tools and support to lead healthier lives.
            </p>
            <h2 className="mb-6 text-4xl font-bold text-gray-100">
              Our Mission
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              At Workout Gear, we are dedicated to providing the best gym
              equipment to help you achieve your fitness goals. Our mission is
              to empower individuals to lead healthier lives through
              high-quality, affordable fitness products.
            </p>
            <h2 className="mb-6 text-4xl font-bold text-gray-100">
              Our Vision
            </h2>
            <p className="text-xl text-gray-300">
              We envision a world where everyone has access to the best fitness
              tools and support to lead healthier lives. Our goal is to inspire
              and empower people to achieve their fitness dreams by providing
              top-notch equipment and exceptional customer service.
            </p>
          </div>
        </Container>
      </div>

      {/* Team Section */}
      <div className="border border-b border-l-0 border-r-0 border-t py-16">
        <Container>
          <h2 className="mb-12 text-center text-4xl font-bold">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div data-aos="fade-right" className="text-center">
              <img
                src={teamImage1}
                alt="John Miller"
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-100">John Miller</h3>
              <p className="font-medium text-gray-300">Founder & CEO</p>
              <p className="mt-2 text-gray-200">
                John has over 20 years of experience in the fitness industry and
                is passionate about helping people achieve their health goals.
              </p>
            </div>
            <div data-aos="fade-up" className="text-center">
              <img
                src={teamImage2}
                alt="Jane Smith"
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-100">Steve Smith</h3>
              <p className="font-medium text-gray-300">Head of Marketing</p>
              <p className="mt-2 text-gray-200">
                Steve brings his expertise in digital marketing to help spread
                the word about our innovative fitness solutions.
              </p>
            </div>
            <div data-aos="fade-right" className="text-center">
              <img
                src={teamImage3}
                alt="Emily Johnson"
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-100">
                Rodrigo Johnson
              </h3>
              <p className="text-gray-300">Product Manager</p>
              <p className="mt-2 text-gray-200">
                Rodrigo oversees product development and ensures that each piece
                of equipment meets our high standards of quality.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Customer Testimonials */}
      <div className="border-b py-16">
        <Container>
          <div className="container mx-auto mb-4 flex flex-col items-center pb-6 md:p-1 md:px-12">
            <h1 className="mb-10 text-center text-4xl font-semibold leading-none">
              Satisfied Customers
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-5 md:px-10 md:pb-10 lg:grid-cols-2 lg:gap-20">
            <div
              data-aos="fade-left"
              className="mx-12 flex flex-col items-center lg:mx-0"
            >
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute left-0 top-0 h-8 w-8 dark:text-gray-300"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  "Workout Gear has completely transformed my home gym. The
                  equipment is top-notch and the customer service is excellent."
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 h-8 w-8 dark:text-gray-300"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="my-2 h-1 w-12 rounded-lg dark:bg-violet-600"></span>
              <p>Leroy Rashford</p>
            </div>
            <div
              data-aos="fade-right"
              className="mx-12 flex max-w-lg flex-col items-center lg:mx-0"
            >
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute left-0 top-0 h-8 w-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  "Great quality and affordable prices with great customer
                  service. I couldn't be happier with my purchase from Workout
                  Gear."
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 h-8 w-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="my-2 h-1 w-12 rounded-lg dark:bg-violet-600"></span>
              <p>Andrew Wniteshaw</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <div data-aos="fade-up" className="py-16">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 py-6 md:grid-cols-2 md:divide-x lg:px-8">
            <div className="py-6 md:px-6 md:py-0">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pb-4 pt-2">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bashundhara, Dhaka-1219</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+9843215</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>workoutgear@gmail.com</span>
                </p>
              </div>
            </div>
            <form
              noValidate={true}
              className="flex flex-col space-y-6 py-6 md:px-6 md:py-0"
            >
              <label className="block">
                <span className="mb-2 ml-1 text-base font-medium">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Tom Latham"
                  className="block w-full rounded-md bg-gray-100 p-3 text-black placeholder-gray-700 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                />
              </label>
              <label className="block">
                <span className="mb-2 ml-1 text-base font-medium">
                  Email address
                </span>
                <input
                  type="email"
                  placeholder="tom@latham.com"
                  className="block w-full rounded-md bg-gray-100 p-3 text-black placeholder-gray-700 shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                />
              </label>
              <label className="block">
                <span className="mb-1 ml-1 text-base font-medium">Message</span>
                <textarea
                  rows={3}
                  className="block w-full rounded-md bg-gray-100 text-black focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                ></textarea>
              </label>
              <button
                type="button"
                className="btn border-none bg-[#1a1a2e] text-lg text-white outline outline-2 hover:bg-white hover:text-[#1a1a2e]"
              >
                Submit
              </button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
