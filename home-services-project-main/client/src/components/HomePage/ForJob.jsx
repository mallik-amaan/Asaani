import Tools from "../../assets/homepagePhoto/tools.png";
import House from "../../assets/homepagePhoto/house.svg";

function ForJob() {
  return (
    <div className="text-white relative">
      <div className="bg-[#336DF2] flex " style={{ height: "25vh" }}>
        <img src={Tools} alt="" className="hidden md:block" />
        <div className="bg-[#336DF2] flex flex-col p-5 lg:pt-10 lg:pl-40 justify-evenly">
          <div className="row">
            <div className="font-bold text-[40px] col">
              Join as a repair staff
              <br />
              with Asaani
            </div>
            <div className="col">
              <div className="text-[10px]">
                Attending standardized training free!
                <br />
                And also receive more compensation than before
              </div>
            </div>
            <div className="text-[20px]">
              Contact the email: asaani@gmail.com
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden sm:block">
            <img src={House} alt="" className="mix-blend-screen" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForJob;
