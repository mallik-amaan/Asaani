// The bottom bar has a return button and next is a components that use many pages.import image from "../../assets/CustomerPhoto/imageIndex.js";
function SubmitTab(props) {
  return (
    <footer className="w-full flex justify-between items-center bg-white h-[92px] px-[10vw] border-t border-grey300 fixed bottom-0 ">
      <button className="btn-secondary " onClick={props.onClickBack}>
        <img src={image.arrowBlue} className="inline " /> retrospective{" "}
      </button>
      <button className="btn-primary " onClick={props.onClickNext}>
        {" "}
        {props.next}
        <img src={image.arrowWhite} className="inline" />
      </button>
    </footer>
  );
}

export default SubmitTab;
