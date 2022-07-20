import {
    Home,
    Customers as CustomersIcon,
    Calendar,
    POS,
    Card,
    Arrows,
    Charts,
    Mail,
    Bell,
    Gift,
    Setting
} from '../../component/Icons';


import { Calendars, Customers, Dashboard, Manage, Service, Report } from '../../pages'

// customper page
import Info from '../../pages/Customers/Info';
import Classify from '../../pages/Customers/Classify';
import Statistical from '../../pages/Customers/Statistical'
import AddCusomer from '../../pages/Customers/AddCustomer';

// manage page
import CustomerDebt from '../../pages/Manage/CustomerDebt';
import CompanyDebt from '../../pages/Manage/CompanyDebt';

// report page
import ReportDebt from '../../pages/Report/ReportDebt';
import StatisticDebt from '../../pages/Report/StatisticDebt';

// service page
import ServiceAndPost from '../../pages/Service/ServiceAndPost';
import Therapy from '../../pages/Service/Therapy';
import TherapyDetail from '../../pages/Service/TherapyDetail';


// calendars page
import Schedule from '../../pages/Calendars/Schedule';

const sidebar_routes = [
    {
        display: "Trang chủ",
        base: "/",
        icon: <Home />,
        content: <Dashboard />
    },
    {
        display: "Khách hàng",
        base: "/customers",
        icon: <CustomersIcon />,
        content: <Customers />,
        groups: [
            {
                display: 'Phân hạng khách hàng',
                path: 'phan-hang-khach-hang',
                content: <Classify />
            },
            {
                display: 'Thống kê khách hàng',
                path: 'thong-ke-khach-hang',
                content: <Statistical />
            },
            {
                display: 'Thông tin khách hàng',
                path: 'thong-tin-khach-hang',
                content: <Info />,
            },
            {
                display: 'Thêm khách hàng',
                path: 'them-khach-hang',
                content: <AddCusomer />,
            },

        ]
    },
    {
        display: "Đặt hẹn",
        base: "/calendar",
        icon: <Calendar />,
        content: <Calendars />,
        groups: [
            {
                display: 'Lịch hẹn khách hàng',
                path: 'lich-hen-khach-hang',
                content: <Schedule />
            },
        ]
    },
    {
        display: "Bán hàng (POS)",
        base: "/sell",
        icon: <POS />,
        content: <div>Bán hàng POS</div>
    },
    {
        display: "Thẻ dịch vụ",
        base: "/card",
        icon: <Card />,
        content: <div>Thẻ dịch vụ</div>
    },
    {
        display: "Quản lý thu chi",
        base: "/mangage",
        icon: <Arrows />,
        content: <Manage />,
        groups: [
            {
                display: 'Công nợ khách hàng',
                path: 'cong-no-khach-hang',
                content: <CustomerDebt />
            },
            {
                display: 'Công nợ công ty',
                path: 'cong-no-cong-ty',
                content: <CompanyDebt />
            }
        ]
    },
    {
        display: "Báo cáo",
        base: "/report",
        icon: <Charts />,
        content: <Report />,
        groups: [
            {
                display: "Báo cáo công nợ",
                path: "bao-cao-cong-no",
                content: <ReportDebt />
            },
            {
                display: "Thống kê công nợ",
                path: "thong-ke-cong-no",
                content: <StatisticDebt />
            }
        ]
    },
    {
        display: "Gửi SMS",
        base: "/send",
        icon: <Mail />,
        content: <div>Gửi SMS</div>
    },
    {
        display: "Dịch vụ",
        base: "/service",
        icon: <Bell />,
        content: <Service />,
        groups: [
            {
                display: 'Dịch vụ và bài viết',
                path: 'dich-vu-va-bai-viet',
                content: <ServiceAndPost />
            },
            {
                display: 'Liệu trình',
                path: 'lieu-trinh',
                content: <Therapy />,
            },
            {
                path: 'lieu-trinh/:id',
                content: <TherapyDetail />
            },

        ]
    },
    {
        display: "Sản phẩm",
        base: "/product",
        icon: <Gift />,
        content: <div>Sản phẩm</div>
    },
    {
        display: "Hệ thống",
        base: "/system",
        icon: <Setting />,
        content: <div>Hệ thống</div>
    },
    {
        display: "Phiên bản 1.0.5",
        base: "/version",
        content: <div>Phiên bản 1.0.5</div>
    },
]

export default sidebar_routes;