import { Link } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import error from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100 pb-3">
        <div className="container mx-auto py-5">
          <div className="flex flex-col justify-center items-center">
            <img src={error} alt="" />
            <h1 className="text-5xl font-semibold text-center py-3">
              Oops, page not found!
            </h1>
            <p className="text-xl text-center my-4 text-[#627382]">
              The page you are looking for is not available.
            </p>
            <Link
              to="/"
              className="btn btn-primary font-semibold text-white mt-4  "
            >
              Go Back!
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
