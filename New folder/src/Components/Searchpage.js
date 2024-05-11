import React from 'react'
import searchIcon from "../search.svg";
import GigCard from './GigCard.js';

export default function Searchpage(props) {
  return (
    <div className="searchdiv">
        <div className="mb-3 p-5 " style={{ padding: "10px", backgroundColor: "#47dd9c", height: "230px" }}>
            <div className="row align-items-top">
                <h1 className="text-white mb-3">Search</h1>
                <div className="col-lg-6 col-sm-8 col-md-10">
                    <input
                    className="w-100 border-0 rounded form-control form-control-sm p-2"
                    type="text"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    />
                </div>
                <div className="col">
                    <img
                    src={searchIcon}
                    alt=""
                    style={searchStyle}
                    />
                </div>
            </div>
        </div>

        <div className="gigs-div container">
            <h3>You searched for {props.searchtext}</h3>
            <div className="row" style={{justifyContent:"space-between",margin:"2%"}}>
                <GigCard className="col" style={{width: "100%"}}/>
                <GigCard className="col" style={{width: "100%"}}/>
                <GigCard className="col" style={{width: "100%"}}/>
            </div>
            <div className="row" style={{justifyContent:"space-between",margin:"2%"}}>
                <GigCard className="col" style={{width: "100%"}}/>
                <GigCard className="col" style={{width: "100%"}}/>
                <GigCard className="col" style={{width: "100%"}}/>
            </div>
            <div className="row" style={{justifyContent:"space-between",margin:"2%"}}>
                <GigCard className="col" style={{width: "100%"}}/>
                <GigCard className="col" style={{width: "100%"}}/>
                <GigCard className="col" style={{width: "100%"}}/>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item active">
                    <span className="page-link">
                        2
                        <span className="sr-only"></span>
                    </span>
                    </li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="/">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

const searchStyle = {
    marginTop: "5px",
    color: "black",
    height: "20px",
    width: "30px",
  };
