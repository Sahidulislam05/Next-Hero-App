import { Link } from "react-router";
import play from "../../assets/PlayStore.png";
import app from "../../assets/AppStore.png";
import heroImg from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="bg-base-200">
      <div className="hero  py-10 lg:py-20 ">
        <div className="hero-content text-center">
          <div className="text-center">
            <h1 className=" text-5xl md:text-7xl font-bold">
              We Build <br />
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                Productive {""}
              </span>
              Apps
            </h1>
            <p className="pt-5 pb-10 text-[#627382] text-xl ">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-3 justify-center items-center">
              <Link
                to="https://play.google.com/store/games?hl=en"
                target="_blank"
                className="btn "
              >
                <img src={play} alt="Google Play" />
                Google Play
              </Link>
              <Link
                to="https://www.apple.com/app-store/"
                target="_blank"
                className="btn "
              >
                <img src={app} alt="App Store" />
                App Store
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className="w-2/3" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
