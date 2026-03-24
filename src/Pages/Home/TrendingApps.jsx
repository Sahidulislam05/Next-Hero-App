import { Link } from "react-router";
import AppsCard from "../../Components/AppsCard";

const TrendingApps = ({ trendingApps }) => {
  //   console.log(appsData);
  return (
    <div className="bg-gray-100">
      <div className="pt-20 container mx-auto ">
        <h1 className="text-5xl font-bold text-center">Trending Apps</h1>
        <p className="text-xl text-center mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {trendingApps.map((app) => (
            <AppsCard app={app} key={app.id}></AppsCard>
          ))}
        </div>
        <div className="flex justify-center items-center py-10">
          <Link
            to="/apps"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center "
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
