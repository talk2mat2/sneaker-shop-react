import React from "react";
import Side from "../side";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Cart from "../cart";
import Modalreview from "../modal";

const Home = () => {
  const [openSide, setOpenSIde] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [active, setActive] = React.useState(1);

  const left = () => {
    if (active > 2) {
      setActive(active - 1);
    } else {
      setActive(4);
    }
  };
  const right = () => {
    if (active < 4) {
      setActive(active + 1);
    } else {
      setActive(1);
    }
  };
  return (
    <>
      <nav className="h-20 w-full container mx-auto flex flex-row items-center border-b-1 mb-4 px-2">
        <ul className="flex flex-row items-center">
          <li onClick={() => setOpenSIde(!openSide)} className="hide-desktop">
            <i
              style={{ fontSize: "30px" }}
              className="bi bi-list  m-0 p-0 mr-3"
            ></i>
          </li>
          <li className="mr-7 font-bold text-xl brand bolder">sneakers</li>
          <li className="mx-3 text-sm dis hide-mobile">Collections</li>
          <li className="mx-3 text text-sm dis hide-mobile">Men</li>
          <li className="mx-3 text-sm active hide-mobile">Women</li>
          <li className="mx-3 text-sm hide-mobile">About</li>
          <li className="mr-2 text-sm hide-mobile">Contact</li>
        </ul>
        <ul className="ml-auto flex flex-row pl-4">
          <li style={{ fontSize: "20px" ,marginRight:"10px"}}>
            <Tooltip
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    color: "#000000",
                    background: "#ffffff",
                  },
                },
              }}
              title={
                <React.Fragment>
                  <Cart />
                </React.Fragment>
              }
            >
              <i className="bi bi-cart3 mx-3"></i>
            </Tooltip>
          </li>
          <li className="flex items-center ">
            <Avatar
              style={{ background: "#ff7d1b" }}
              sx={{ width: 24, height: 24 }}
              alt=""
              src="/static/images/avatar/1.jpg"
            />
          </li>
        </ul>
        {openSide && <Side {...{ openSide, setOpenSIde }} />}
      </nav>

      <div className="main  mt-[90px]">
        <div className="flex flex-row flex-wrap container mx-auto justify-center">
          <section className="md:w-[45%]  p-2  min-h-[400px]">
            <div className=" md:w-[60%]  md:pb-[90px] lg:pb-[90px] mx-auto">
              <div style={{ position: "relative" }}>
                <img
                  onClick={handleOpen}
                  className=" mx-auto rounded-lg"
                  src={`./image-product-${active}.jpg`}
                />
                <div>
                  <i
                    onClick={left}
                    style={{
                      color: "#ffffff",
                      fontSize: "40px",
                      position: "absolute",
                      top: "45%",
                      left: "4px",
                    }}
                    class="bi bi-arrow-left-circle hide-desktop"
                  ></i>
                </div>
                <div>
                  <i
                    onClick={right}
                    style={{
                      color: "#ffffff",
                      fontSize: "40px",
                      position: "absolute",
                      top: "45%",
                      right: "4px",
                    }}
                    class="bi bi-arrow-right-circle hide-desktop"
                  ></i>
                </div>
              </div>
              <div className=" flex  flex-row justify-between mt-5 hide-mobile">
                <div className="w-[20%] img-active">
                  <img alt=""
                    className="rounded-lg"
                    src="./image-product-1-thumbnail.jpg"
                  />
                </div>
                <div className="w-[20%]">
                  <img alt=""
                    className="rounded-lg"
                    src="./image-product-1-thumbnail.jpg"
                  />
                </div>
                <div className="w-[20%]">
                  <img alt=""
                    className="rounded-lg"
                    src="./image-product-1-thumbnail.jpg"
                  />
                </div>
                <div className="w-[20%]">
                  <img alt=""
                    className="rounded-lg"
                    src="./image-product-1-thumbnail.jpg"
                  />
                </div>
              </div>
              <Modalreview {...{ open, setOpen, handleClose, handleOpen }} />
            </div>
          </section>
          <section className="md:w-[50%] min-h-[400px]">
            <div className=" px-5 md:px-0 ld:px-0 w-90 md:w-[80%]  mx-auto">
              <h4 className="orange bolder mt-3">sneaker company</h4>
              <h3 className="mt-[12px] bolder ">
                Fall Limited Edition
                <br />
                Sneakers
              </h3>
              <div className="mt-6">
                <p>
                  these low profile sneakers are your perfect casuals wear
                  companions featuring a durable runner outer sole. <br />
                  theyill withstand everything the weather can offer
                </p>
              </div>
              <div className="mt-4 flex flex-row lg:flex-col md:flex-col sm:items-center md:items-start justify-between ">
                <span>
                  <h4 className="inline-block mr-5 bolder">$125.00</h4>
                  <div className="inline-block">
                    <span className="orange bolder">50%</span>
                  </div>
                </span>

                <small style={{ color:"#7393b3" }} className="float-right bolder">$250.00</small>
              </div>

              <div className="flex items-center flex-col md:flex-row lg:flex-row mt-4 ">
                <span className="flex items-center flex-row mr-4 w-full md:w-28 lg:w-28 mb-3 md:mb-0 lg:mb-0 justify-center">
                  <button className="bg-slate-100 rounded-lg w-50 h-[40px] w-[50%]">
                    <i className="bi bi-dash"></i>
                  </button>
                  <button className="bg-slate-100 rounded-lg h-[40px] w-[40px]">
                    0
                  </button>
                  <button className="bg-slate-100  rounded-lg h-[40px] w-[50%] ">
                    <i className="bi bi-plus"></i>
                  </button>
                </span>
                <button className=" rounded-lg bg-orange btn w-full md:w-[200px] lg:w-[200px] bolder">
                  <i className="bi bi-cart3 mx-3"></i>Add to cart
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
