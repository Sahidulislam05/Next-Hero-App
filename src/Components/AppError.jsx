import { Link } from "react-router";
import img from "../assets/App-Error.png";

const AppError = () => {
  return (
    <div>
      <div className="bg-gray-100 pb-3">
        <div className="container mx-auto py-5 ">
          <div className="flex flex-col justify-center items-center">
            <img src={img} alt="" />
            <h1 className="text-5xl font-semibold text-center my-3">
              OPPS!! APP NOT FOUND
            </h1>
            <p className="text-xl text-center my-4 text-[#627382]">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <Link
              to="/"
              className="btn btn-primary font-semibold text-white mt-4 "
            >
              Go Back!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppError;
