import SideBar from "./ContractorSidebar.jsx";
import "../../styles/App.css";
import { useUtils } from "../../hooks/utils.js";
import ContractorServiceList from "./ContractorServiceList.jsx";

function ContractorServicePage() {
  const {
    searchService,
    setSearchService,
    service,
    setService,
    deleteServiceId,
    serviceDeleteAlert,
    deleteService,
    service_Id,
    setDeleteService,
  } = useUtils;

  return (
    <div className="admin-service-page">
      <SideBar />
      <ContractorServiceList
        service={service}
        deleteServiceId={deleteServiceId}
        serviceDeleteAlert={serviceDeleteAlert}
        deleteService={deleteService}
        setDeleteService={setDeleteService}
        service_Id={service_Id}
      />
    </div>
  );
}

export default ContractorServicePage;
