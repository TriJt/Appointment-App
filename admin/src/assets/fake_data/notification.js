import { BiError, BiPackage, BiCart } from 'react-icons/bi'
import user_debt from './user_debt'
import company_debt from './company_debt';

const MonthlyDebt = (data) => {
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    let sum = 0;

    data.forEach((item) => {
        let itemMonth = new Date(item.datePaid).getMonth() + 1;
        let itemYear = new Date(item.datePaid).getFullYear();
        if(itemYear == currentYear && itemMonth == currentMonth) sum += Number(item.debt);
    });

    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(sum);
}

const countDebt = (data) => {
    const newData = data.filter((item) => {
        return item.state != "Đã trả xong"
    })

    return newData.length
}

const notification = [
    {
        icon: <BiError />,
        content: "Curabitur id eros quis nunc suscipit blandit"
    },
    {
        icon: <BiPackage />,
        content: "Duis malesuada justo eu sapien elementum, in semper diam posuere"
    },
    {
        icon: <BiCart />,
        content: "Donec at nisi sit amet tortor commodo porttitor pretium a erat"
    },
    {
        icon: <BiError />,
        content: "Có tổng cộng " + (countDebt(company_debt)) + " công nợ cần thanh toán"
    },
    {
        icon: <BiError />,
        content: "Có tổng cộng " + (countDebt(user_debt)) + " của khách hàng cần được thu"
    },
    {
        icon: <BiError />,
        content: "Công nợ khách hàng tháng " + (new Date().getMonth() + 1) + ": " + (MonthlyDebt(user_debt))
    },
    {
        icon: <BiError />,
        content: "Công nợ công ty tháng " + (new Date().getMonth() + 1) + ": " + (MonthlyDebt(company_debt))
    },
]

export default notification