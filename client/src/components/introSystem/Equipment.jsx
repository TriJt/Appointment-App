import React, { useState } from "react";
import Tb1 from "../../assets/images/tb1.jpg";
import Tb2 from "../../assets/images/tb2.jpg";
import Tb3 from "../../assets/images/tb3.jpg";
import Tb4 from "../../assets/images/tb4.jpg";
import {
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
const equiImages = [
  {
    id: 1,
    image: Tb1,
  },
  {
    id: 2,
    image: Tb2,
  },
  {
    id: 3,
    image: Tb3,
  },
  {
    id: 4,
    image: Tb4,
  },
];

const Equipment = () => {
  const [slice, setSlice] = useState(0);
  const [open, setOpen] = useState(false);

  const handelOpen = (i) => {
    setSlice(i);  // set lại theo mảng  từng hình
    setOpen(true); // mở to hình
  };

  const handelMove = (direction) => {
    let newSlice;
    if(direction === "l"){
    newSlice = slice === 0 ? 3 : slice - 1; //qua trái
    }else{
      newSlice = slice === 3 ? 0 : slice + 1;// qua phải
    }

    setSlice(newSlice)
  }
  return (
    <div className="container_e">
      {open && (
        <div className="Equi__slice">
          <AiOutlineClose className="Equi__slice-close" onClick={()=> setOpen(false)}/>
          <AiOutlineArrowLeft className="arrow" onClick={()=> handelMove("l")}/>
          <div className="sliceWrapper">
            <img
              src={equiImages[slice].image}
              alt=""
              className="Equi__slice-image"
            />
          </div>
          <AiOutlineArrowRight className="arrow" onClick={()=> handelMove("r")}/>
        </div>
      )}
      <div className="Equipment__container">
        <div className="Equipment__container-title">
          TRANG THIẾT BỊ ĐƯỢC CHỨNG NHẬN AN TOÀN BỞI BỘ Y TẾ
        </div>
        <p className="Equipment__container-text">
          100% trang thiết bị được nhập khẩu từ các nước có nền công nghệ hiện
          đại như Anh, Mỹ, Hàn Quốc, Nhật Bản.
        </p>
        <div className="Equipment__container-Image">
          {equiImages.map((equiImage, i) => (
            <div className="equiImageWrapper" key={i}>
              <img
                src={equiImage.image}
                className="equiImage"
                onClick={() => handelOpen(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipment;
