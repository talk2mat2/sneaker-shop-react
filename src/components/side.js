import React from "react";

const Side = ({ openSide, setOpenSIde }) => {
  return (
    <div className="sideNav hide-desktop">
      <span onClick={()=>setOpenSIde(false)} className="pt-[40px] ">
        <i
          style={{ fontWeight: "bold", fontSize: "30px" }}
          className="bi bi-x-lg  pl-2"
        ></i>
      </span>
      <ul className="mt-[40px]">
        <li className="bolder my-7">Collectioms</li>
        <li className="bolder my-7">Men</li>
        <li className="bolder my-7">Women</li>
        <li className="bolder my-7">About</li>
        <li className="bolder my-7">Contact</li>
      </ul>
    </div>
  );
};

export default Side;
