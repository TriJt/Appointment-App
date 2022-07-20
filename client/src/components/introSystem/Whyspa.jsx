import React from "react";
import W1 from "../../assets/images/w1.jpg";
import W2 from "../../assets/images/w2.jpg";
import W3 from "../../assets/images/w3.jpg";
import W4 from "../../assets/images/w4.jpg";

const whyspaImages = [
  {
    id: 1,
    image: W1,
    direction: "Hệ thống thẩm mỹ viện hàng đầu hơn 45 chi nhánh trên toàn quốc",
  },
  {
    id: 2,
    image: W2,
    direction: "Đội ngũ chuyên môn hơn 15 năm kinh nghiệm",
  },
  {
    id: 3,
    image: W1,
    direction: "Công nghệ làm đẹp đón đầu xu hướng 4.0",
  },
  {
    id: 4,
    image: W4,
    direction: "CSVC hiện đại, đạt chuẩn đẳng cấp 5 sao",
  },
];
const Whyspa = () => {
  return (
    <div className="Whyspa__container">
      <div className="Whyspa-title">TẠI SAO CHỌN SEOULSPA.VN?</div>
      <div className="Whyspa-content">
        {whyspaImages.map((whyspaImage, index) => (
          <div key={index}>
            <img src={whyspaImage.image} className="whyspaImage" />
            <div className="Whyspa-dir">
                {whyspaImage.direction}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyspa;
