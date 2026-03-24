import { useEffect, useState } from "react";
import downloadImg from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";
const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (savedApps) setInstalled(savedApps);
  }, []);

  if (!installed.length)
    return (
      <div className="bg-gray-100 min-h-[calc(100vh-340px)]">
        <p className="container mx-auto text-3xl font-bold text-center pt-20  ">
          No data available !
        </p>
      </div>
    );

  const sortItem = (() => {
    if (sortOrder === "price-asc") {
      return [...installed].sort((a, b) => a.downloadsCount - b.downloadsCount);
    } else if (sortOrder === "price-desc") {
      return [...installed].sort((a, b) => b.downloadsCount - a.downloadsCount);
    } else {
      return installed;
    }
  })();

  const handleRemoveApp = (id) => {
    const existingList =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    let updatedList = existingList.filter((a) => a.id !== id);
    toast.success("Removed Successfully");
    //  setInstalled((prev) => prev.filter((p) => p.id !== id));
    setTimeout(() => {
      setInstalled(updatedList);
      localStorage.setItem("installedApps", JSON.stringify(updatedList));
    }, 700);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 md:py-16">
        <h1 className=" text-4xl md:text-5xl font-bold text-center">
          Your Installed Apps
        </h1>
        <h1 className="text-xl text-[#627382] text-center mt-4">
          Explore All Trending Apps on the Market developed by us
        </h1>
        <div className="space-y-6">
          <div className="flex justify-between items-center py-5">
            <h1 className=" md:text-2xl md:font-semibold">
              {sortItem.length} Products Found.
            </h1>
            <label className="form-control w-1/2 md:w-full max-w-xs">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none"> Sort By Size </option>
                <option value="price-asc"> Low-&gt;High </option>
                <option value="price-desc"> High-&gt;Low </option>
              </select>
            </label>
          </div>
          <div className="space-y-3">
            {sortItem.map((a) => (
              <div
                key={a.id}
                className="card card-side bg-base-100 shadow-sm p-2"
              >
                <figure>
                  <img
                    className="w-20 h-20 object-cover rounded"
                    src={a.image}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"> {a.title} </h2>
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex justify-between items-center gap-1">
                      <img className="w-4 h-4" src={downloadImg} alt="" />
                      <h2 className="text-[#00D390] "> {a.downloads} </h2>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                      <img className="w-4 h-4" src={rating} alt="" />
                      <p className="text-[#FF8811] ">{a.ratingAvg} </p>
                    </div>
                    <p className="text-[#627382] ">{a.size}MB</p>
                  </div>
                </div>
                <div className="pr-4 flex items-center gap-3">
                  <button
                    onClick={() => handleRemoveApp(a.id)}
                    className="btn bg-[#00D390] text-white"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
