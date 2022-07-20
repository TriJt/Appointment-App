import React from 'react'

const Model = ({handleFrom}) => {
  const handleSubmit =()=>{
    console.log("akdsjh")
  }
return (
  
<div  className="modal">
  <div className="modal-content">
    <span className="close" onClick={handleFrom}>&times;</span>
      <form  onSubmit= {handleSubmit}>
        <div className="title-content">Hồ sơ ứng tuyển</div>
          <div className="content">
            <div className="big-label">Thông tin liên hệ</div>
            <div className='row'>
              <div className="form-group">
                <div className="normal-label">Họ và tên <span className="col_ff0000bold">*</span></div>
                <input className="form-control" placeholder="Họ và tên" />
                <p className="text-small-below">(Họ và tên phải chính xác)</p>
                <div className="clear"></div>
              </div>

              <div className="form-group">
                <div className="normal-label">Ngày sinh <span className="col_ff0000bold">*</span></div>
                <input className="form-control" placeholder="Ngày sinh" />
                <div className="clear"></div>
              </div>
            </div>
            <div className='row'>
              <div className="form-group">
                <div className="normal-label">Email <span className="col_ff0000bold">*</span></div>
                <input className="form-control" placeholder="Email" />
                <p className="text-small-below"></p>
                <div className="clear"></div>
              </div>

              <div className="form-group">
                <div className="normal-label">Số điện thoai <span className="col_ff0000bold">*</span></div>
                <input type="number" className="form-control" placeholder="Số điện thoai" />
                <div className="clear"></div>
              </div>
            </div>
            <div className='row'>
              <div className="form-group">
              <div className="normal-label">Upload CV <span className="col_ff0000bold">*</span></div>
                <input type="file" className="form-control" placeholder="CV" />
                <p className="text-small-below"></p>
              </div>
            </div>
            <div className='row'>
              <div className="form-group">
                <div className="normal-label">Những kỹ năng, dự án làm việc hoặc thành tích nào khiến bạn trở thành một ứng cử viên nặng ký? <span className="col_ff0000bold">*</span></div>
                <textarea className="form-control1" placeholder="Mô tả bản thân" />
                <p className="text-small-below"></p>
                <div className="clear"></div>
              </div>
            </div>
            <button className='button button-primary' type='submit' >Nộp đơn</button>
         
        </div>
      </form>
    
  </div>
</div>
)
}

export default Model