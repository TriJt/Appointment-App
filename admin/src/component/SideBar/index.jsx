import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { sidebar_routes } from "../../assets/fake_data";
import { closeSidebar, openSidebar } from "../../store/slices/sidebarSlice";

export default function Sidebar() {
  const { pathname } = useLocation();
  const pathnameSliced = pathname.slice(
    0,
    pathname.indexOf("/", 2) > -1 ? pathname.indexOf("/", 2) : pathname.length
  );

  const activeItem = sidebar_routes.findIndex((item) => item.base == pathnameSliced);
  const { isOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(isOpen ? closeSidebar() : openSidebar());
  };

  return (
    <div className="sidebar">
      <div className="sidebar__item control" onClick={handleSidebar}>
        <HiOutlineArrowRight color="#fff" />
      </div>
      {sidebar_routes.map((item, index) => (
        <SidebarItem item={item} key={index} isActive={activeItem == index} />
      ))}
    </div>
  );
}

const SidebarItem = ({ item, isActive }) => {
  const condition = item.groups?.length > 0;

  const handleLink = (e) => {
    if (condition) {
      e.preventDefault();
      e.currentTarget.classList.toggle("active");
    }
  };
  return (
    <div className={`sidebar__item ${isActive ? "active" : ""}`}>
      <Link to={item.base} onClick={handleLink}>
        {item.icon}
        <span>{item.display}</span>
      </Link>

      {condition && (
        <div className="sidebar__item--group">
          {item.groups.map(
            (member, memberIndex) =>
              member.display && (
                <Link to={item.base + "/" + member.path} key={memberIndex}>
                  <span>{member.display}</span>
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
};
