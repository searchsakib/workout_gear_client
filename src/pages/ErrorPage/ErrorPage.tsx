import { Link } from "react-router-dom";
import errorImg from "/images/error.png";

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center bg-[#1a1a2e]">
      <div className="mx-auto flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <div className="max-h-[330px]">
            <img src={errorImg} alt="error image" />
          </div>
          <p className="text-2xl font-semibold text-white md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mb-9 mt-4 text-gray-300">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div className="mb-28">
            <Link
              to="/"
              rel="noopener noreferrer"
              className="rounded bg-white px-8 py-3 font-semibold text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white hover:outline"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
