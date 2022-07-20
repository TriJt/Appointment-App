import React, { useRef } from "react";
import img1 from "../../assets/images/tuyendung.png";
import Model from "./Model";
const Content_body = () => {
  const btn = useRef();
  const handleFrom = () => {
    btn.current.classList.toggle("active");
  };
  return (
    <>
      <div className="container Content_body" ref={btn}>
        <div className="detail-left">
          <div className="main">
            <div className="content">
              <div className="grid wide">
                <div className="row">
                  <div className="col-m-12">
                    <h2 className="title">Phát triển bản thân và sự nghiệp</h2>
                    <div className="row ">
                      <div className="col l-12 m-12 c-12">
                        <div className="box-main">
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/ic1.svg"
                            className="box-main__img "
                            title="Trắc nghiệm tính cách"
                            alt="Trac nghiem tinh cach"
                          />
                          <div className="box-main--intro">
                            <h3 className="box-main__name">
                              Khám phá tính cách và năng lực bản thân
                            </h3>
                            <p className="box-main__description">
                              Lựa chọn nghề nghiệp chính xác hơn thông qua các
                              bài trắc nghiệm về tính cách, khả năng giải quyết
                              vấn đề, trí thông minh,...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col l-12 m-12 c-12">
                        <div className="box-main">
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/ic2.svg"
                            className="box-main__img "
                            title="Trắc nghiệm tính cách"
                            alt="Trac nghiem tinh cach"
                          />
                          <div className="box-main--intro">
                            <h3 className="box-main__name">
                            Tra cứu thông tin sự nghiệp
                            </h3>
                            <p className="box-main__description">
                            Dễ dàng tiếp cận và tìm hiểu về các chế độ, chính sách nhân sự cần biết thông qua các công cụ hữu ích
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col l-12 m-12 c-12">
                        <div className="box-main">
                          <img
                            src="https://www.topcv.vn/v4/image/welcome/ic3.svg"
                            className="box-main__img "
                            title="Trắc nghiệm tính cách"
                            alt="Trac nghiem tinh cach"
                          />
                          <div className="box-main--intro">
                            <h3 className="box-main__name">
                            Quỹ ý tưởng phát triển nghề nghiệp TopCareer
                            </h3>
                            <p className="box-main__description">
                            Giúp học sinh, sinh viên hiểu về tầm quan trọng của giáo dục hướng nghiệp, nhận diện nghề và nâng cao năng lực ứng tuyển
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-right ">
          <div>
            <button onClick={handleFrom} className="detail-right__btn ">
              Nộp đơn ứng tuyển
            </button>
            <div className="detail-right__image">
              <img src={img1} />
            </div>
          </div>
        </div>
        <Model handleFrom={handleFrom} />
      </div>
    </>
  );
};

export default Content_body;
