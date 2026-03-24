import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadImg from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import AppChart from "./AppChart";
const AppsDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const [isInstall, setIsInstall] = useState(false);
  const app = apps.find((a) => String(a.id) === id);
  const {
    image,
    companyName,
    title,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
  } = app || {};
  //   console.log(app);
  const handleInstall = () => {
    setIsInstall(true);
    toast.success(`${title} installed successfully!`);

    const existingList =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    let updatedList = [];

    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) return alert("Already added!");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installedApps", JSON.stringify(updatedList));
  };
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="pt-14">
          <div className="card lg:card-side ">
            <figure className=" h-[350px] overflow-hidden ">
              <img
                className="w-[350px] object-cover rounded-2xl"
                src={image}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold"> {title} </h2>
              <p className="text-xl text-[#627382] ">
                Developed by{" "}
                <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                  {companyName}
                </span>{" "}
              </p>
              <div className="border-b-2 border-gray-300 my-5 "></div>
              <div className="card-actions mr-10">
                <div className="flex justify-between items-center gap-7">
                  <div>
                    <img src={downloadImg} alt="" />
                    <p className="my-2">Downloads</p>
                    <p className="text-4xl font-bold">{downloads} </p>
                  </div>
                  <div>
                    <img src={rating} alt="" />
                    <p className="my-2">Average Ratings</p>
                    <p className="text-4xl font-bold">{ratingAvg} </p>
                  </div>
                  <div>
                    <img src={review} alt="" />
                    <p className="my-2">Total Reviews</p>
                    <p className="text-4xl font-bold">{reviews} </p>
                  </div>
                </div>
              </div>
              <Link
                onClick={handleInstall}
                disabled={isInstall}
                className={`btn w-1/2  mt-7 ${
                  isInstall
                    ? "bg-gray-200 text-black cursor-not-allowed p-1 "
                    : "text-white bg-[#00D390] p-1 "
                } `}
              >
                {isInstall ? "Installed" : `Install Now ( ${size} MB )`}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 my-5 "></div>
        {/* part 2  */}
        <AppChart app={app}></AppChart>
        {/* part 3  */}
        <div className="mb-20 ml-4 md:ml-0 mt-10">
          <h1 className="text-2xl font-semibold">Description</h1>
          <p className="text-[#627382] mt-6 text-left pb-8"> {description} </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default AppsDetails;
