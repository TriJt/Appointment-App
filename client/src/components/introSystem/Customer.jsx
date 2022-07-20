import React,{useState} from 'react';
import {
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Kh1 from "../../assets/images/Kh1.jpg";
// import Kh2 from "../../assets/images/Kh2.jpg";
import Kh3 from "../../assets/images/Kh3.jpg";
import Kh4 from "../../assets/images/Kh4.jpg";
import Kh5 from "../../assets/images/Kh5.jpg";
import Kh6 from "../../assets/images/Kh6.png";

const cusImages = [
  {
    id: 1,
    image: Kh1,
  },
  {
    id: 2,
    image: Kh3,
  },
  {
    id: 3,
    image: Kh3,
  },
  {
    id:4,
    image: Kh4,
  },
  {
    id: 5,
    image: Kh5,
  },
  {
    id: 6,
    image: Kh6,
  },
];
const Customer = () => {
  const [slice, setSlice] = useState(0);
  const [open, setOpen] = useState(false);

  const handelOpen = (i) => {
    setSlice(i);  // set lại theo mảng  từng hình
    setOpen(true); // mở to hình
  };

  const handelMove = (direction) => {
    let newSlice;

    if(direction === "l"){
    newSlice = slice === 0 ? 5 : slice - 1; //qua trái
    }else{
      newSlice = slice === 5 ? 0 : slice + 1;// qua phải
    }

    setSlice(newSlice)
  }

  return (
    <div className='Customer__container'>
      {open && (
        <div className="Customer__slice">
          <AiOutlineClose className="Customer__slice-close" onClick={()=> setOpen(false)}/>
          <AiOutlineArrowLeft className="arrow" onClick={()=> handelMove("l")}/>
          <div className="sliceWrapper">
            <img
              src={cusImages[slice].image}
              alt=""
              className="Customer__slice-image"
            />
          </div>
          <AiOutlineArrowRight className="arrow" onClick={()=> handelMove("r")}/>
        </div>
      )}
        <div className='Customer-title'>
        Nhờ sự tin yêu của khách hàng, Thẩm viện Seoul Spa luôn có lượng khách lớn ghé thăm.
        </div>
        <div className='Customer-text'>
        Quý khách vui lòng đặt lịch hẹn trước để được CHỦ ĐỘNG – ƯU TIÊN – TIẾT KIỆM THỜI GIAN!
        </div>
        <div className="System_Customer-image">
          {cusImages.map((cusImage, i) => (
            <div className='imageWrapper' key={i}>
                <img src={cusImage.image} className="cusImage"
                 onClick={() => handelOpen(i)} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Customer