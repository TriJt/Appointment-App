import React from "react";
import Image from "../../assets/images/banner-bs.jpg";
const Doctor = () => {
  return (
    <div className="Doctor__container">
      <div className="Doctor__container-image">
        <img src={Image} className="Doctor-image" />
      </div>
      <div className="Doctor__container-text">
        <div className="Doctor__text-title">CHUYÊN GIA VÀ BÁC SĨ
        <div className="line"></div>
        </div>
        <p className="Doctor-p">
          100% các bác sĩ tại Seoul Spa được đào tạo bài bản từ các trường Đại
          học danh tiếng trong và ngoài nước. Ngoài kiến thức và kỹ năng trong
          nghề,
        </p>
        <p  className="Doctor-p">
          mỗi Bác sĩ và Trưởng bộ phận phải trải qua quá trình trị liệu tối
          thiểu 10,000 ca lâm sàng để có hiểu biết chuyên sâu về làn da cũng như
          cơ địa người Châu Á.
        </p>
        <p>
          Luôn học hỏi, nỗ lực và cập nhật những kiến thức y khoa – xu hướng
          thẩm mỹ mới nhất để bắt kịp với xu hướng y học hiện đại cam kết mang
          đến cho khách hàng kết quả thẩm mỹ tốt nhất.
        </p>
      </div>
    </div>
  );
};

export default Doctor;
