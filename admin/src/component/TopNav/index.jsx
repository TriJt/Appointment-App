import { useEffect, useState } from "react";
import { BiBell, BiSearch, BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Buttons, DropDown, Inputs } from "../";
import { branches, notification, user_menu } from "../../assets/fake_data";
import { user } from "../../assets/images";

const current_user = {
  display_name: "Alvid_Nguyen",
  image: user,
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    {item.icon}
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">
      <img src={user.display_name} alt="" />
    </div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      {item.icon}
      <span>{item.content}</span>
    </div>
  </Link>
);

export default function TopNav() {
  const [inputValue, setInputValue] = useState("");
  const [selectedBranch, setSelectedBranch] = useState({});

  useEffect(() => {
    // asynchronous processing when call api branches
  }, [branches])  

  return (
    <div className="topnav">
      <div className="topnav__left">
        <span>Seoulspa</span>
        <div className="topnav__filter-select">
          <Inputs
            type="select"
            bgcolor="main"
            placeholder="Tất cả chi nhánh"
            size="full"
            icon={<BiDownArrow />}
            onChange={option => setSelectedBranch(option)}
            options={branches.map((option) => ({
              value: option.id,
              label: option.city,
            }))}
          />
        </div>
      </div>
      <div className="topnav__center">
        <div className="topnav__center--button">
          <Buttons size="small" radius>
            Thêm khách hàng
          </Buttons>
        </div>
        <div className="topnav__center--button">
          <Buttons size="small" radius>
            Tạo đơn hàng
          </Buttons>
        </div>
      </div>

      <div className="topnav__right">
        <div className="topnav__filter-input">
          <Inputs
            type="text"
            placeholder="Tìm nhanh KH.."
            bgcolor="white"
            size="full"
            icon={<BiSearch />}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            radius={true}
          />
        </div>
        <div className="topnav__right-info">
          <DropDown
            // icon={<BiUser />}
            customToggle={() => renderUserToggle(current_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
          <DropDown
            // badge={12}
            icon={<BiBell />}
            contentData={notification}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View all</Link>}
          />
        </div>
      </div>
    </div>
  );
}
