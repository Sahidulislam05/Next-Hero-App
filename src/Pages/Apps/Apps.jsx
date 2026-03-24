import { Search } from "lucide-react";
import useApps from "../../Hooks/useApps";
import AllApps from "./AllApps";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../Components/LoadingAnimation";
import AppError from "../../Components/AppError";
// import Spinner from "../../Components/Spinner";

const Apps = () => {
  const { apps, loading } = useApps();
  // console.log(apps);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedApp, setSearchedApp] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!apps.length) return;
    setSearchLoading(true);

    const timer = setTimeout(() => {
      const term = search.trim().toLocaleLowerCase();
      const searchedApps = term
        ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
        : apps;

      setSearchedApp(searchedApps);
      setSearchLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, apps]);

  if (loading) {
    return <LoadingAnimation></LoadingAnimation>;
  }

  // console.log(searchedApps);
  return (
    <div className="bg-gray-100">
      <div className="pt-12 container mx-auto pb-20">
        <h1 className="text-5xl font-bold text-center">Our All Applications</h1>
        <p className="text-xl text-center mt-5 text-[#627382] ">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center my-10">
          <h1 className="text-xl md:text-2xl font-bold">
            <span>({searchedApp.length})</span> Apps Found
          </h1>
          <label className="input w-1/2 md:w-full max-w-xs ">
            <Search />{" "}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>

        {/* Optional Part Where Show Spinner before fetching data */}

        {/* {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {searchedApp.map((app) => (
            <AllApps key={app.id} app={app}></AllApps>
          ))}
        </div>
      )} */}

        {/* All Apps Page Data Loading */}

        {searchLoading ? (
          <LoadingAnimation></LoadingAnimation>
        ) : searchedApp.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {searchedApp.map((app) => (
              <AllApps key={app.id} app={app}></AllApps>
            ))}
          </div>
        ) : (
          <AppError></AppError>
        )}
      </div>
    </div>
  );
};

export default Apps;
