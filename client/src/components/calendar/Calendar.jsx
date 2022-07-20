import { useState } from 'react';
import { calendarIcon, phoneIcon } from '../../assets/images';
import CalendarForm from './CalendarForm';

const Calendar = () => {
  const [isFormShow, setIsFormShow] = useState(false)
  return (
    <div className="calendar">
      <div className="container grid grid-col-2 grid-col-sm-1">
        <div className="calendar__column">
          <a href="" className="calendar__box">
            <div className="img"><img src={phoneIcon} alt="" /></div>
            <span>Liên hệ hotline</span>
            <h3>1900 6947</h3>
            <div className="line left"></div>
            <p>Giải quyết bất kỳ thắc mắc nào của khách hàng, phục vụ tận tâm 24/7</p>

          </a>
          <a href="" className="calendar__box">
            <div className="img"><img src={calendarIcon} alt="" /></div>
            <span>Đặt lịch hẹn</span>
            <h3>Nhận ưu đãi</h3>
            <div className="line center"></div>
            <p>Đặt lịch hẹn ngay hôm nay để nhận hàng ngàn ưu đãi khủng</p>
          </a>

        </div>
        <div className="calendar__column">
          <div className="img"><img src="https://cdn.diemnhangroup.com/seoulspa/DTxeeFop-dang-ky-ngay-1.png" alt="" /></div>
          <button onClick={() => setIsFormShow(true)}>Nhận tư vấn</button>
        </div>
      </div>
      {isFormShow && <CalendarForm setIsFormShow={setIsFormShow} />}
    </div>

  );
};

export default Calendar;
