import Navbar from "../components/Navbar.jsx";
import Slogan from "/src/components/Homepage/Slogan.jsx";
import ContractorServices from "/src/components/Contractor/ContractorServices.jsx";
import Footer from "/src/components/HomePage/Footer.jsx";
import ContractorStatistics from "/src/components/Contractor/ContractorStatistics.jsx";
import { useNavigate } from "react-router-dom";

function ContractorDashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="prompt" style={{ backgroundColor: "white" }}>
      <div>
        <Navbar title="" />
        <ContractorStatistics />
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15%",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <button
            className="col"
            style={{
              display: "inline-flex",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Prompt",
              backgroundColor: "#336DF2",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => navigate("/details")}
          >
            Add Details
          </button>
          <button
            className="col"
            style={{
              display: "inline-flex",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Prompt",
              backgroundColor: "#336DF2",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => navigate("/newservice")}
          >
            Add Service
          </button>
        </div>
        <ContractorServices />
        <Footer />
      </div>
    </div>
  );
}

export default ContractorDashboardPage;
