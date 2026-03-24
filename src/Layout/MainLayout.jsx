import { Outlet, useLocation, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingAnimation from "../Components/LoadingAnimation";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const isNavLoading = navigation.state === "loading";

  useEffect(() => {
    setIsPageLoading(true);

    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  const showLoading = isNavLoading || isPageLoading;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      {showLoading && <LoadingAnimation></LoadingAnimation>}
      <main className="flex-1">
        <div>
          <Outlet></Outlet>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
