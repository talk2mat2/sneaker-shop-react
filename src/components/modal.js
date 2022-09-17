import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  outline: "none",

  p: 4,
};

export default function Modalreview({
  open,
  setOpen,
  handleClose,
  handleOpen,
}) {
  const [active, setActive] = React.useState(1);

  const left = () => {
    if (active >2) {
        setActive(active-1)
    } else {
      setActive(4);
    }
  };
  const right = () => {
    
    if (active <4) {
      setActive(active+1)
    } else {
      setActive(1);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box style={style}>
          <div className=" md:w-[60%]  pb-[90px] mx-auto">
            
            <div style={{ position: "relative" }}>
            <div >
                <i onClick={handleClose}
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    position: "absolute",
                    top: "-4%",
                    right: "-20px",
                  }}
                  class="bi bi bi-x-lg"
                ></i>
              </div>
              <img
                className=" mx-auto rounded-lg"
                src={`./image-product-${active}.jpg`}
              />
              <div >
                <i onClick={left}
                  style={{
                    color: "#ffffff",
                    fontSize: "40px",
                    position: "absolute",
                    top: "45%",
                    left: "-20px",
                  }}
                  class="bi bi-arrow-left-circle"
                ></i>
              </div>
              <div >
                <i onClick={right}
                  style={{
                    color: "#ffffff",
                    fontSize: "40px",
                    position: "absolute",
                    top: "45%",
                    right: "-20px",
                  }}
                  class="bi bi-arrow-right-circle"
                ></i>
              </div>
            </div>

            <div className=" flex  flex-row justify-between mt-5">
              <div className={`w-[20%] ${active===1&&"img-active"}`}>
                <img alt=""
                  className="rounded-lg"
                  src="./image-product-1-thumbnail.jpg"
                />
              </div>
              <div className={`w-[20%] ${active===2&&"img-active"}`}>
                <img alt=""
                  className="rounded-lg"
                  src="./image-product-2-thumbnail.jpg"
                />
              </div>
              <div className={`w-[20%] ${active===3&&"img-active"}`}>
                <img alt=""
                  className="rounded-lg"
                  src="./image-product-3-thumbnail.jpg"
                />
              </div>
              <div className={`w-[20%] ${active===4&&"img-active"}`}>
                <img alt=""
                  className="rounded-lg"
                  src="./image-product-4-thumbnail.jpg"
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
