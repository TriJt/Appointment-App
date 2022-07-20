import React from "react";
import Helmet from "../components/Helmet";

import SliderData from "../assets/fake_data/slider";

import Slider from "../components/Home/Slider";

import BgRealistic from "../components/Home/BgRealistic";
import Taiapp from "../components/Home/Taiapp";
// import Service from '../components/Home/Service'
import DataProducts from "../assets/fake_data/Products";
//import Section, {SectionBody, SectionTitle} from '../components/Section'

// data hình ảnh thực tế
import { Link } from "react-router-dom";
import treatmentsData from "../assets/fake_data/BgRealistic";

const Home = () => {
  //dich vu noi bat  Service__card

  // const[type, setType] = useState(0)

  // const Index = servicecontent.findIndex(e => e.id_service === type)

  //hiển thị dữ liệu của button của hình ảnh thực tế
  const getAllbtntreatments = treatmentsData.getAllbtntreatments;
  //hiển thị dữ liệu của hình ảnh thực tế
  const getAlltreatments = treatmentsData.getAlltreatments;
  const DataProduct = (count) => {
    return DataProducts.slice(0, count);
  };

  return (
    <Helmet title="trang chủ">
      {/* begin slider */}
      <Slider data={SliderData} control={true} auto={true} timeOut={2000} />

      {/* end slider */}

      {/* begin DỊCH VỤ NỔI BẬT */}
      <div className="container">
        <section className="Service">{/* <Service /> */}</section>
      </div>
      {/* end DỊCH VỤ NỔI BẬT */}
      {/* begin TIỆN TÍCH APP */}
      <section className="taiapp">
        <div className="container">
          <Taiapp />
        </div>
      </section>
      {/* end TIỆN TÍCH APP */}

      {/* begin HÌNH ẢNH THỰC TẾ */}
      <section className="BgRealistic">
        <div className="container">
          <div className="BgRealistic__container">
            <div className="BgRealistic__title">HÌNH ẢNH THỰC TẾ</div>
            <div className="BgRealistic__desp">
              Cảm nhận sự khác biệt khi đến với hệ thống làm đẹp hàng đầu SeoulSpa.vn.
            </div>
            <BgRealistic
              // hiển thị dữ liệu của 4 btn
              button={getAllbtntreatments}
              content={getAlltreatments}
              //numberBtn không khai báo mặt định lấy tất cả btn
              numberBtn={4}
              //numberContent không khai báo mặt định lấy tất cả content
              numberContent={4}
            />
            <div className="BgRealistic__seemore">
              <Link to={"/categ"}>Xem thêm</Link>
            </div>
          </div>
        </div>
      </section>
      {/* begin HÌNH ẢNH THỰC TẾ */}
    </Helmet>
  );
};

export default Home;
