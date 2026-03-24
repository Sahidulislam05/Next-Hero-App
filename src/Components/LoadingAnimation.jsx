import logo from "../../public/logo.png";

const LoadingAnimation = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center my-48 gap-5">
          <h1 className="text-4xl font-bold"> L </h1>
          <img className="w-12 h-12 animate-spin" src={logo} alt="" />
          <h1 className="text-4xl font-bold">O A D I N G ...</h1>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
