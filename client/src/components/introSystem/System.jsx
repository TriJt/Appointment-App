import React from "react";
import Image from "../../assets/images/9twV3dWm-ban-do.jpg";
import Cs1 from "../../assets/images/cs1920.jpg";
import Cs2 from "../../assets/images/cs2.jpg";
import Cs3 from "../../assets/images/cs3.jpg";
import Cs4 from "../../assets/images/cs4.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import Equipment from "./Equipment";
import Doctor from "./Doctor";
import Whyspa from "./Whyspa";
import Newpaper from "./Newpaper";
import Customer from "./Customer";
import Slice from "./Slice";

const infraImages = [
  {
    id: 1,
    image: Cs1,
  },
  {
    id: 2,
    image: Cs2,
  },
  {
    id: 3,
    image: Cs3,
  },
  {
    id: 4,
    image: Cs4,
  },
];
const System = () => {
  return (
    <div className="System-container">
      <Slice />
      {/* GIỚI THIỆU HỆ THỐNG THẨM MỸ VIỆN HÀNG ĐẦU VIỆT NAM */}
      <div className="Sytem-intro">
        <div className="System_intro-text">
          <div className="intro_text-title">
            HỆ THỐNG THẨM MỸ VIỆN HÀNG ĐẦU VIỆT NAM
          </div>
          <div className="intro_text-content">
            <p className="intro_p">
              Mang trong mình niềm tin về sứ mệnh đánh thức vẻ đẹp tiềm ẩn trong
              mỗi người, hệ thống Thẩm Mỹ Viện hàng đầu Việt Nam – Seoul Spa
              luôn nỗ lực không ngừng để đem đến cho khách hàng những dịch vụ
              hoàn hảo nhất. Không chỉ nằm ở kết quả mà Seoul Spa còn hướng tới
              thẩm mỹ khỏe – đẹp – an toàn để mỗi phút giây ngắm mình trong
              gương là những phút giây tận hưởng hạnh phúc thật sự của mỗi khách
              hàng.
            </p>
            <p className="intro_p">
              Nụ cười hài lòng, sự tin tưởng tuyệt đối của khách hàng là thước
              đo của sự thành công của chúng tôi
            </p>
            <p>
              Với 45 chi nhánh trải dài khắp cả nước, Seoul Spa tự hào là chuỗi
              hệ thống thẩm mỹ viện hàng đầu Việt Nam, đáp ứng tốt mọi nhu cầu
              làm đẹp của chị em trên khắp vùng miền Tổ Quốc.
            </p>
          </div>
        </div>
        <div className="System_intro-chart">
          {" "}
          {/* Hình ảnh bản đồ*/}
          <img src={Image} className="chart-img" />
        </div>
      </div>
      {/* KẾT THÚC GIỚI THIỆU HỆ THỐNG THẨM MỸ VIỆN HÀNG ĐẦU VIỆT NAM */}

      {/* CƠ SỞ VẬT CHẤT BẮT ĐẦU */}
      <div className="System-infrastructure">
        <div className="System_infrastructure-title">
          CƠ SỞ VẬT CHẤT ĐẲNG CẤP – MANG TIÊU CHUẨN KHÁCH SẠN 5 SAO
        </div>
        <div className="System_infrastructure-content">
          <p>
            <GoPrimitiveDot
              style={{
                marginRight: "10px",
                marginBottom: "-4px",
              }}
            />
            Lấy cảm hứng từ phong cách hiện đại, tinh tế với thiết kế rộng rãi
            lên tới 2000m2 nhưng vẫn bật lên sự ấm cúng, thân thiện cùng nội
            thất đẳng cấp, tiện nghi Seoul Spa là một trong những Spa thẩm mỹ có
            cơ sở vật chất đạt tiêu chuẩn quốc tế.
          </p>
          <p>
            <GoPrimitiveDot
              style={{
                marginRight: "10px",
                marginBottom: "-4px",
              }}
            />
            Đồng thời, tất cả các giường thẩm mỹ được thiết kế độc lập, kín đáo
            mang đến không gian riêng tư, sự thoải mái nhất cho khách hàng khi
            trải nghiệm các dịch vụ tại Seoul Spa
          </p>
          <p>
            <GoPrimitiveDot
              style={{
                marginRight: "10px",
                marginBottom: "-4px",
              }}
            />
            Máy Móc Trang Thiết Bị
          </p>
          <p>
            <GoPrimitiveDot
              style={{
                marginRight: "10px",
                marginBottom: "-4px",
              }}
            />
            Hệ thống công nghệ được trang bị đầy đủ từ cơ bản đến nâng cao. Đồng
            thời luôn cập nhật và ứng dụng các công nghệ, thiết bị thẩm mỹ được
            đánh giá tốt nhất, hiện đại hàng đầu thế giới vào các dịch vụ tại
            Spa.
          </p>
          <p>
            <GoPrimitiveDot
              style={{
                marginRight: "10px",
                marginBottom: "-4px",
              }}
            />
            Chuỗi phòng chờ, phòng hậu phẫu rộng rãi, tiện nghi tại Seoul Spa
            chắc chắn sẽ làm khách hàng hài lòng.
          </p>
        </div>
        <div className="System_infrastructure-image">
          {infraImages.map((infraImage, index) => (
            <img key={index} src={infraImage.image} className="infraImage" />
          ))}
        </div>
      </div>
      {/* CƠ SỞ VẬT CHẤT KẾT THÚC */}

      <div className="System__bottom">
        {/* TRANG THIẾT BỊ BẮT ĐẦU */}
        <Equipment />
        {/* TRANG THIẾT BỊ KÉT THÚC */}

        {/* CHUYÊN GIA VÀ BÁC SĨ BẮT ĐẦU */}
        <Doctor />
        {/* CHUYÊN GIA VÀ BÁC SĨ KẾT THÚC */}

        {/* TẠI SAO SPA BẮT ĐẦU */}
        <Whyspa />
        {/* TẠI SAO SPA KẾT THÚC */}

        {/* TẠI SAO SPA BẮT ĐẦU */}
        <Newpaper />
        {/* TẠI SAO SPA KẾT THÚC */}

        {/* KHÁCH HÀNG ĐÁNH GIÁ BẮT ĐẦU */}
        <Customer />
        {/* KHÁCH HÀNG ĐÁNH GIÁ KẾT THÚC */}
      </div>
    </div>
  );
};

export default System;
