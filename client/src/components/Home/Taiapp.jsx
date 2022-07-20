import React from 'react'

import img1 from "../../assets/images/qrcode.jpg"
import img2 from "../../assets/images/appstore.jpg"
import img3 from "../../assets/images/ggplay.jpg"
import img4 from "../../assets/images/datlich.jpg"
import img5 from "../../assets/images/kthuatvien.jpg"
import img6 from "../../assets/images/theodoikieutrinh.jpg"
import img7 from "../../assets/images/danhgia.jpg"
import img8 from "../../assets/images/tiplamdep.jpg"
import img9 from "../../assets/images/taiapp.png"

const Taiapp = () => {
  return (
    <div className="taiapp__container">
        <div className="taiapp__left">
            <div className="taiapp__download">
                <div className="taiapp__link">
                    <div className='title'>QUÉT MÃ ĐỂ TẢI APP</div>
                    <div className='image'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="taiapp__qrcode">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className='title' >QUÉT MÃ ĐỂ TẢI APP</div>
            <div className="taiapp__utilities">  
                <div className="taiapp__utilities--item">
                    <img src={img4} alt="" />
                    <p>Đặt lịch</p>
                </div>    
                <div className="taiapp__utilities--item">
                    <img src={img5} alt="" />
                    <p>Chọn kỹ thuật viên</p>
                </div> 
                <div className="taiapp__utilities--item">
                    <img src={img6} alt="" />
                    <p>Theo dõi liệu trình</p>
                </div> 
                <div className="taiapp__utilities--item">
                    <img src={img7} alt="" />
                    <p>Đánh giá</p>
                </div> 
                <div className="taiapp__utilities--item">
                    <img src={img8} alt="" />
                    <p>Tips làm đẹp
                    </p>
                </div>  
                
                
               
                
                
            </div>
        </div>
        <div className="taiapp__right .hide-for-mobile">
            <img src={img9} alt="" />
        </div>
    </div>
  )
}

export default Taiapp