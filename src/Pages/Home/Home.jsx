import { useLoaderData } from "react-router";
import Banner from "./Banner";
import BannerCard from "./BannerCard";
import TrendingApps from "./TrendingApps";

const Home = () => {
  const appsData = useLoaderData();
  // console.log(appsData);

  const trendingApps = appsData.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <BannerCard></BannerCard>
      {/* Front Page Data Loading */}
      <TrendingApps trendingApps={trendingApps}></TrendingApps>
    </div>
  );
};

export default Home;
