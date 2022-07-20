import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { getService } from "../model/navigator";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import Recruitment from "../pages/Recruitment";
import Service from "../pages/Service";
import Categories from "../pages/Service/components/Categories";

const career = {
  display: "Tuyển Dụng",
  base: "/tuyen-dung",
};

const about = {
  display: "Về SeoulSpa.vn",
  base: "/gioi-thieu",
};

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(" ", "-");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  str = str.replaceAll(" ", "-");
  return str;
}
const Routess = () => {
  const [nav, setNavigator] = useState([]);

  useEffect(() => {
    (async () => {
      const temp = [];
      temp.push(about);
      getService().then((res) => {
        if (res.list && res.list.length > 0)
          res.list.map((item) => {
            const newNav = {};
            newNav.display = item.name;
            newNav.base = "/" + removeVietnameseTones(item.name);
            newNav.groups = [];
            newNav.content = item.content ? item.content : "No content";

            if (item.smallservice && item.smallservice.length > 0) {
              newNav.groups.push([]);
              item.smallservice.map((record) => {
                const navItem = {};
                navItem.display = record.name;
                navItem.path = removeVietnameseTones(record.name);
                navItem.content = record.content ? record.content : "No content";
                newNav.groups.push(navItem);
              });
            }
            temp.push(newNav);
          });
        temp.push(career);
        setNavigator(temp);
      });
    })();
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tuyen-dung" element={<Recruitment />} />
      <Route path="/gioi-thieu" element={<Introduce />} />
      <Route path="/dich-vu" element={<Categories />} />
      {nav.map((navItem, navIndex) => {
        return (
          <Route key={navIndex} path={navItem.base}>
            {navItem.groups?.map((member, memberIndex) => {
              return (
                <Route
                  key={memberIndex}
                  path={member.path}
                  element={
                    <Service title={member.display} description={member.description}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: member.content,
                        }}
                      />
                    </Service>
                  }
                />
              );
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default Routess;
