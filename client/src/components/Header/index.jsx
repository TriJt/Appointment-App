import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFillDiamondFill } from "react-icons/bs";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { IoIosArrowDown, IoIosCall, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { getService } from '../../model/navigator.js';
import Search from "./Search";


const career = {
  display: 'Tuyển Dụng',
  base: '/tuyen-dung'
}

const about =
{
  display: 'Về SeoulSpa.vn',
  base: '/gioi-thieu'
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
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
  str = str.replaceAll(" ", "-");
  return str;
}

export default function Header() {
  const headerRef = useRef(null);
  const [isNavShow, setIsNavShow] = useState(false);
  const [nav, setNavigator] = useState([]);
  useEffect(() => {
    const temp = [];
    temp.push(about);
    getService().then(res => {
      if (res.list && res.list.length > 0) res.list.map(item => {
        //console.log(res.list);
        const newNav = {};
        newNav.display = item.name;
        newNav.base = "/" + removeVietnameseTones(item.name);
        newNav.groups = [];
        newNav.content = item.content ? item.content : 'No content';

        if (item.smallservice && item.smallservice.length > 0) {
          newNav.groups.push([]);
          item.smallservice.map(record => {
            const navItem = {};
            navItem.display = record.name;
            navItem.path = removeVietnameseTones(record.name)
            navItem.content = record.content ? record.content : "No content"
            newNav.groups[0].push(navItem);
          })
        }
        temp.push(newNav);
      });
      temp.push(career);
      setNavigator(temp);
    })
  }, [])


  useEffect(() => {
    const stickyHeader = () => {
      ['scroll', 'resize'].forEach(item => {
        window.addEventListener(item, () => {
          let scrollY;
          if (window.innerWidth > 1023) // is desktop ?
            scrollY = window.scrollY <= 75 ? window.scrollY : 75;
          else scrollY = 0
          headerRef.current.style.transform = `translateY(${-1 * scrollY}px)`;
        })
      })
    }

    stickyHeader()
    return () => {
      ['scroll', 'resize'].forEach(item => {
        window.removeEventListener(item, null);
      })
    }
  })


  return (
    <header id="header" className="header" ref={headerRef}>

      <div className="header__wrapper">
        <div className="header__bar hide-for-mobile">
          <p>
            SEOUL SPA - THẨM MỸ VIỆN HÀNG ĐẦU VIỆT NAM VỚI 45 CHI NHÁNH TRÊN TOÀN
            QUỐC
          </p>
        </div>
        <div className="header__main">
          <div className="container">
            <Search />
            <div className="hamberger hide-for-desktop"
              onClick={() => setIsNavShow(true)}>
              <HiMenu />
            </div>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="buttons">
              <a className="hide-for-mobile" href="">
                <HiShoppingCart />
              </a>
              <a className="hide-for-mobile" href="tel:19006947">
                <IoIosCall />
                <span>Hotline: 1900 6947</span>
              </a>
              <a href="" className="hide-for-desktop">
                <BiSearch />
              </a>
            </div>
          </div>
        </div>
        <ul className="header__nav hide-for-mobile">
          {nav && nav.length > 2 && nav.map((navItem, navIndex) => {
            let condition = navItem.groups && navItem.groups.length > 0;
            return <li key={navIndex} className="header__nav--item">
              <Link to={navItem.base} className={condition ? 'disable-link' : ''}>{navItem.display}</Link>

              {condition && <ul className="hover__box">
                {
                  navItem.groups.length == 1
                    ? navItem.groups[0].map((member, memberIndex) => (
                      <li key={memberIndex} className='hover__link'>
                        <BsFillDiamondFill />
                        <Link to={`${navItem.base}/${member.path}`}>{member.display}</Link>
                      </li>
                    ))
                    : navItem.groups.map((group, groupIndex) => (
                      <li key={groupIndex} className="hover__group">
                        <ul>
                          {group.map((member, memberIndex) => {
                            return memberIndex == 0
                              ? <li key={memberIndex} className='hover__link'>
                                <BsFillDiamondFill />
                                <Link to={`${navItem.base}/${member.path}`}>{member.display}</Link></li>
                              : <li key={memberIndex}><Link to={`${navItem.base}/${member.path}`}>{member.display}</Link></li>
                          })}
                        </ul>
                      </li>
                    ))
                }
              </ul>}
            </li>
          })}
        </ul>
      </div>

      <nav id='nav' className={`nav hide-for-desktop ${isNavShow && 'isShow'}`}>
        <div className="nav__wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="nav__list">
            <li className="nav__list--search">
              <Search hideForMobile={false} />
            </li>
            <li className="nav__list--title">
              <h3>Danh mục</h3>
            </li>
            {nav && nav.length > 2 && nav.map((navItem, navIndex) => {
              return <li key={navIndex} onClick={e => e.target.classList.toggle('active')}>
                {navItem.groups && navItem.groups.length > 0
                  ? navItem.groups.length == 1
                    ? <>
                      <Link to={navItem.base} className='disable-link'>
                        {navItem.display}
                        <IoIosArrowDown />
                      </Link>
                      <ul className='drop-down'>
                        {navItem.groups[0].map((member, memberIndex) => (
                          <li key={memberIndex}>
                            <Link to={`${navItem.base}/${member.path}`}>
                              {member.display}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                    : <>
                      <Link to={navItem.base} className='disable-link'>
                        {navItem.display}
                        <IoIosArrowDown />
                      </Link>
                      <ul className='drop-down'>
                        {navItem.groups.map((group, groupIndex) => (
                          <li key={groupIndex}>
                            <ul className="drop-down-group">
                              {group.map((member, memberIndex) => {
                                return (
                                  memberIndex == 0
                                    ? <li key={memberIndex} className='title'>
                                      <Link to={`${navItem.base}/${member.path}`}>
                                        {member.display}
                                      </Link>
                                    </li>
                                    : <li key={memberIndex}>
                                      <Link to={`${navItem.base}/${member.path}`}>
                                        {member.display}
                                      </Link>
                                    </li>
                                )
                              })}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </>
                  : <Link to={navItem.base}>{navItem.display}</Link>
                }
              </li>
            })}
          </ul>
        </div>
        <div className="nav__close"
          onClick={() => setIsNavShow(false)}>
          <IoIosClose />
        </div>
      </nav>

    </header >
  );
}
