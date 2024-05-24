import Footer from "/src/components/HomePage/Footer.jsx";
import ServiceList from "../components/CustomerPage/ServiceList.jsx";
import Navbar from "../components/Navbar";

function CustomerServiceListDisplay() {
  return (
    <>
      <Navbar title="Our Services"/>
      <ServiceList />
      <Footer />
    </>
  );
}
export default CustomerServiceListDisplay;
