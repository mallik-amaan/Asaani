import BlueMan from "../../assets/homepagePhoto/BlueMan.png";
import '../../styles/App.css'
import { useNavigate } from "react-router-dom";


function Slogan () {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-[#E7EEFF] relative">
      {/* right side */}
      <div className="p-4 md:p-1 lg:py-20 xl:ml-30">
        <div className="text-[#1852D6] md:text-[35px] lg:text-[40px] xl:text-[64px] prompt-Bold xl:ml-40 text-[20px] ">
          About home ... let us take care of you
        </div>
        <div className="text-[#000000] font-bold md:text-[25px] lg:text-[30px] xl:text-[42px] prompt-Bold xl:ml-40">
"Convenient, good value, reliable,"        </div>
        <div className="text-[#646C80] md:text-[20px] xl:text-[24px] xl:ml-40 lg:mt-10 text-[12px]">
          Repair electrical appliances, repair air conditioning, clean the house<br />By housekeeper And professional technicians
        </div>
        <div className="xl:ml-40 xl:mt-12 lg:mt-20 "> 
          <button className="btn-primary"
          onClick={() => navigate("/services-list")}>
            Check service prices
          </button>
        </div>
      </div>

      {/* left side */}
      <div className=" lg:absolute bottom-0 lg:right-0 xl:right-20">
        <img src={BlueMan} alt="blueman" className="w-[100%]"/>
      </div>
    </div>
  )
}


export default Slogan;