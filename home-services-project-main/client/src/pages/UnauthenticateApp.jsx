// UnauthenticateApp คือ หน้าสำหรับ user ที่ยังไม่ได้ register
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import "../styles/App.css";
import NotFoundPage from "./NotFoundPage";
import CustomerServiceListDisplay from "./CustomerServiceListDisplay"
import ContractorDashboardPage from "./ContractorDashboardPage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
            path="/services-list"
            element={<CustomerServiceListDisplay />}
          />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/dashboard" element={<ContractorDashboardPage/>}/>     
        </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
