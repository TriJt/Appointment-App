import { BrowserRouter } from "react-router-dom";
import { Routers, Sidebar, TopNav } from "../";
import { useSelector } from "react-redux";
import { Dialog } from "../../context";


import "../../scss/index.scss";

const Layout = () => {
  const sidebar = useSelector((store) => store.sidebar);
  return (
    <BrowserRouter>
      <Dialog>
        <div className={`layout ${sidebar.isOpen ? "show" : "hide"}`}>
          <Sidebar />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <Routers />
            </div>
          </div>
        </div>
      </Dialog>
    </BrowserRouter>
  );
};

export default Layout;
