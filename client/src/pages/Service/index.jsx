import React from "react";
import { Outlet } from "react-router";
import Helmet from "../../components/Helmet";
import { Categories, Post } from "./components";

const Service = ({
  title = "dịch vụ",
  description,
  children,
}) => {
  return (
    <Helmet title={title}>
      <div id="service" className="service">
        <Post title={title} description={description}>
          {children}

          {/* <h2 id="title-1">Tìm hiểu tất tần tật về công nghệ E2X</h2>
          <p>
            Những lúc làn da xuất hiện các vấn đề về mụn, hẳn là nó đã khiến bạn thật khó chịu, và
            mất tự tin về diện mạo của mình. Điều quan trọng là khi mụn mới hình thành nếu chữa trị
            kịp thời và đúng cách thì những nốt mụn sẽ sớm xẹp đi và biến mất.
          </p>
          <p>
            Vì thế, đừng chần chờ để mụn tái đi tái lại rồi mới tìm cách chữa trị, hãy tìm hiểu
            phương pháp điều trị phù hợp, an toàn và hiệu quả nhất.
          </p>
          <p>
            Một trong những phương pháp trị mụn được các bác sĩ da liễu khuyên dùng đó là trị mụn
            bằng công nghệ tại cơ sở uy tín. Và ngay tại đây, chúng tôi muốn giới thiệu đến bạn một
            công nghệ trị mụn được xem là dịch vụ “mũi nhọn” tại Thẩm mỹ viện Seoul Spa đó là công
            nghệ trị mụn E2X.
          </p>
          <figure>
            <div className="img">
              <img src="https://cdn.diemnhangroup.com/seoulspa/NORr6mV7-tri-mun-e2x-1.jpg" alt="" />
            </div>
            <figcaption>
              Công nghệ trị mụn E2X nhân đôi số lần bắn tia Elight mang lại hiệu quả diệt mụn vượt
              trội
            </figcaption>
          </figure>

          <h2 id="title-2">Ưu điểm nổi bật của công nghệ trị mụn E2X</h2>
          <p>
            Không ngẫu nhiên mà trị mụn E2X trở thành dịch vụ nổi bật của Thẩm mỹ viện Seoul Spa, mà
            chính vì nó sở hữu nhiều ưu điểm nổi bật giúp điều trị mụn dứt điểm cho rất nhiều khách
            hàng. Cụ thể như sau:
          </p>
          <ul>
            <li>
              Hiệu quả điều trị dứt điểm lên tới 98% nhiều loại mụn từ cấp độ 1-2 từ mụn nhẹ đến mụn
              ở mức độ trung bình như đã kể trên.
            </li>
            <li>Mụn ở nam hay nữ đều điều trị hiệu quả</li>
            <li>Ánh sáng sinh học Elight giúp điều trị mụn an toàn và hiệu quả cao</li>
            <li>Không để lại thâm mụn hay sẹo rỗ</li>
          </ul>

          <h2 id="title-3">Những đối tượng phù hợp với công nghệ trị mụn E2X?</h2>
          <p>
            Dưới đây là một số đối tượng phù hợp với liệu trình trị mụn E2X, nếu bạn rơi vào một
            trong những tình trạng bên dưới thì nên tham khảo sử dụng dịch vụ này để loại bỏ mụn dứt
            điểm:
          </p>
          <ul>
            <li>
              Những ai đang bị mụn ẩn, mụn viêm, mụn bọc, mụn thâm, mụn đầu đen, mụn đầu trắng, mụn
              cám nhiều.
            </li>
            <li>Những ai bị mụn lâu năm, mụn lan khắp mặt</li>
            <li>Những ai bị mụn lâu năm, mụn lan khắp mặt</li>
            <li>Những ai có làn da sần sùi, mụn tái đi tái lại nhiều lần.</li>
          </ul>

          <h2 id="title-4">Công nghệ trị mụn E2X nhân trị mụn dứt điểm</h2>
          <p>
            Như đã đề cập trên thì sở dĩ dịch vụ trị mụn E2X được nhiều khách hàng tin tưởng sử dụng
            là nhờ nó mang lại hiệu quả và có tính an toàn cực kỳ cao. Ánh sáng sinh học Elight tác
            động sâu vào từng nốt mụn giúp diệt khuẩn gây mụn, tiêu viêm, triệt tiêu tận gốc mụn và
            ngăn ngừa mụn tái phát lại.
          </p>
          <figure>
            <div className="img">
              <img src="https://cdn.diemnhangroup.com/seoulspa/2e1vSqBd-tri-mun-e2x-5.jpg" alt="" />
            </div>
            <figcaption>
              Công nghệ trị mụn E2X đánh bay mọi loại mụn giúp khách hàng lấy lại làn da sạch mụn,
              thâm
            </figcaption>
          </figure>

          <h2 id="title-5">Những lý do nên chọn trị mụn E2X tại Thẩm mỹ viện Seoul Spa</h2>
          <h3 id="title-6">Công nghệ trị mụn E2X nhân trị mụn dứt điểm</h3>
          <p>
            Như đã đề cập trên thì sở dĩ dịch vụ trị mụn E2X được nhiều khách hàng tin tưởng sử dụng
            là nhờ nó mang lại hiệu quả và có tính an toàn cực kỳ cao. Ánh sáng sinh học Elight tác
            động sâu vào từng nốt mụn giúp diệt khuẩn gây mụn, tiêu viêm, triệt tiêu tận gốc mụn và
            ngăn ngừa mụn tái phát lại.
          </p> */}
        </Post>
      </div>
    </Helmet>
  );
};

export default Service;
