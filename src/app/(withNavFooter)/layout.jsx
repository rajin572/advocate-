import TopNav from "@/components/shared/TopNav";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <TopNav />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
