const BannerCard = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center p-10 md:p-20">
      <h1 className="text-4xl md:text-5xl font-bold">
        Trusted by Millions, Built for You
      </h1>
      <div className="flex flex-col md:flex-row  justify-around items-center gap-6 md:gap-0 mt-10 md:mt-20">
        <div>
          <h2>Total Downloads</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold my-2">29.6M</h1>
          <p>21% more than last month</p>
        </div>
        <div>
          <h2>Total Reviews</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold my-2">906K</h1>
          <p>46% more than last month</p>
        </div>
        <div>
          <h2>Active Apps</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold my-2">132+</h1>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
