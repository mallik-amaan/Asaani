import Navbar from "../components/Navbar.jsx";
import Slogan from "/src/components/Homepage/Slogan.jsx";
import TopServices from "/src/components/HomePage/TopServices.jsx";
import Footer from "/src/components/HomePage/Footer.jsx";
import ContractorStatistics from "/src/components/Contractor/ContractorStatistics.jsx";

function ContractorDashboardPage() {
  return (
    <div className="prompt" style={{backgroundColor:"white"}}>
      <div>
        <Navbar title="My Services" />
        <ContractorStatistics />
        <TopServices />
        <Footer />
      </div>
    </div>
  );
}

export default ContractorDashboardPage;
