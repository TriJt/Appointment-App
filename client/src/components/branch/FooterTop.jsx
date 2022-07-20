import React from "react";
import { logo } from "../../assets/images";
import { Link, useLocation } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const mainNav = [
  {
    display: "Dịch Vụ",
    path: "/Service",
  },
  {
    display: "Chính sách bảo mật thông tin",
    path: "/Introduce",
  },
  {
    display: "Kết quả điều trị",
    path: "/d",
  },
  {
    display: "Đào tạo spa",
    path: "/k",
  },
  {
    display: "Tip làm đẹp",
    path: "/tip",
  },
  {
    display: "Tuyển Dụng",
    path: "/s",
  },
];
const FooterTop = () => {
  const { pathname } = useLocation();

  return (
    <div className="FooterTop__container">
      <div className="FooterTop">
        <div className="FooterTop-swapper">
          <div className="Logo">
            <img src={logo} alt="" />
          </div>
          <div className="FooterTop-title">
            HỆ THỐNG THẨM MỸ VIỆN HÀNG ĐẦU VIỆT NAM
          </div>
          <div className="FooterTop-text">
            SeoulSpa.Vn luôn nỗ lực không ngừng để đem đến cho khách hàng những
            dịch vụ hoàn hảo nhất.
          </div>
          <Link to="/">
            <span
              style={{ color: "#b1812c", marginRight: "20px", fontSize: "20px" }}
            >
              |
            </span>
            SeoulSpa.vn - Hệ thống làm đẹp hàng đầu
          </Link>
        </div>
        <div className="FooterTop-swapper">
          <div className="FooterTop-title">HOT LINE</div>
          <button className="FooterTop-btn">
            <BsTelephoneFill
              style={{ color: "#b1812c", marginBottom: "-1px" }}
            />{" "}
            1900 5555 - 188747863
          </button>
          <div className="FooterTop-title">THÔNG TIN LIÊN HỆ</div>
          <div>
            <AiOutlineMail
              style={{
                background: "#b1812c",
                padding: "5px",
                fontSize: "24px",
                borderRadius: "50%",
                marginBottom: "-8px",
                color: "white",
              }}
            />{" "}
            cskh@seoulspa.vn
          </div>
          <div>
            <AiOutlineMail
              style={{
                background: "#b1812c",
                padding: "5px",
                fontSize: "24px",
                borderRadius: "50%",
                marginBottom: "-8px",
                color: "white",
              }}
            />{" "}
            info@seoulspa.vn
          </div>
          <div>
            <FaMapMarkerAlt
              style={{
                background: "#b1812c",
                padding: "5px",
                fontSize: "24px",
                borderRadius: "50%",
                marginBottom: "-8px",
                color: "white",
              }}
            />{" "}
            84 Nguyễn Háo Vĩnh, P.Tân Qúy, Q.Tân Phú
          </div>
          <div className="FooterTop-time">THỜI GIAN LÀM VIỆC</div>
          <div className="FooterTop-text">
            8h30 - 19h30 thứ 2 - CN (Kể cả lễ, Tết)
          </div>
        </div>
        <div className="FooterTop-swapper">
          <div className="FooterTop-title">Menu</div>
          <div className="Footer-link">
            {mainNav.map((item, index) => (
              <div key={index} className="link">
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
