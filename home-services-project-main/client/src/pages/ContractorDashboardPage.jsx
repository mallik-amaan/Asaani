import Navbar from "../components/Navbar.jsx";
import Slogan from "/src/components/Homepage/Slogan.jsx";
import TopServices from "/src/components/HomePage/TopServices.jsx";
import Footer from "/src/components/HomePage/Footer.jsx";
import ContractorStatistics from "/src/components/Contractor/ContractorStatistics.jsx";


function ContractorDashboardPage() {
  return (
    <div className="prompt">
      <div>
        <Navbar title="My Services"/>
        <Slogan />
        <TopServices />
        <ContractorStatistics />
        <Footer />
      </div>
    </div>
  );
}

export default ContractorDashboardPage;