import { Link } from "react-router";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const AppsCard = ({ app }) => {
  //   console.log(app);
  const { title, image, downloads, ratingAvg, id } = app;
  return (
    <Link to={`/app-details/${id}`}>
      <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out p-3">
        <figure className="h-56 overflow-hidden rounded-xl">
          <img className="w-[81%] object-cover  " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center bg-[#F1F5E8] gap-2 p-2 rounded">
              <img className="w-4  " src={download} alt="" />
              <p className="text-[#00D390]">{downloads}</p>
            </div>
            <div className="flex justify-between items-center bg-[#FFF0E1] gap-2 p-2 rounded">
              <img className="w-4  " src={rating} alt="" />
              <p className="text-[#FF8811] ">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
