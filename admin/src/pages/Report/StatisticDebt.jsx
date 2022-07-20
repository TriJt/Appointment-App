import React, {useEffect, useState} from "react";

import { BarChart, Buttons, Helmet, Inputs } from "../../component";
import { user_debt, company_debt } from "../../assets/fake_data";

const labelsMonth = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
];
const labelsQuarter = [
    "Quý 1",
    "Quý 2",
    "Quý 3",
    "Quý 4"
];
const labelsYear = [
    new Date().getFullYear() - 4,
    new Date().getFullYear() - 3,
    new Date().getFullYear() - 2,
    new Date().getFullYear() - 1,
    new Date().getFullYear()
]

export default function StatisticDebt() {
    const [inputValue, setInputValue] = useState(new Date().getFullYear());
    const [showMonth, setShowMonth] = useState(true);
    const [showQuarter, setShowQuarter] = useState(false);
    const [showYear, setShowYear] = useState(false);

    const enableYear = (event) => {
        setShowMonth(false)
        setShowQuarter(false)
        setShowYear(true)
    }

    const enableMonth = (event) => {
        setShowMonth(true)
        setShowQuarter(false)
        setShowYear(false)
    }

    const enableQuarter = (event) => {
        setShowMonth(false)
        setShowQuarter(true)
        setShowYear(false)
    }

    const handleInput = (event) => setInputValue(event.target.value);

    const statsByMonth = (data, num) => {
        let currentMonth = new Date().getMonth();
        let length = currentMonth + 1;
        let months = new Array(length).fill(0);

        data.forEach((item) => {
            let itemMonth = new Date(item.datePaid).getMonth();
            let itemYear = new Date(item.datePaid).getFullYear();
            if(itemYear == inputValue) {
                if (num == 0) months[itemMonth] += Number(item.paid);
                if (num == 1) months[itemMonth] += Number(item.owed);
                if (num == 2) months[itemMonth] += Number(item.debt);
            }
        });

        return months;
    }
    const statsByQuarter = (data, num) => {
        let currentMonth = new Date().getMonth() + 1;
        let length = Math.floor(currentMonth / 3) + (currentMonth % 3 == 0 ? 0 : 1);
        let months = new Array(length).fill(0);

        data.forEach((item) => {
            let itemMonth = Math.floor((new Date(item.datePaid).getMonth() + 1) / 3);
            itemMonth -= ((new Date(item.datePaid).getMonth() + 1) % 3 == 0 ? 1 : 0);
            let itemYear = new Date(item.datePaid).getFullYear();
            if(itemYear == inputValue) {
                if (num == 0) months[itemMonth] += Number(item.paid);
                if (num == 1) months[itemMonth] += Number(item.owed);
                if (num == 2) months[itemMonth] += Number(item.debt);
            }
        });
        console.log(months)
        return months;
    }
    const statsByYear = (data, num) => {
        let months = new Array(5).fill(0);

        data.forEach((item) => {
            let itemYear = 4 - (new Date().getFullYear() - new Date(item.datePaid).getFullYear());
            if (num == 0) months[itemYear] += Number(item.paid);
            if (num == 1) months[itemYear] += Number(item.owed);
            if (num == 2) months[itemYear] += Number(item.debt);
        });

        return months;
    }
    const data1Month = {
        labels: labelsMonth,
        datasets: [
            {
                label: 'Đã trả',
                backgroundColor: 'rgba(119, 210, 75, 0.5)',
                data: statsByMonth(user_debt, 0)
            },
            {
                label: 'Còn nợ',
                backgroundColor: 'rgba(231, 22, 29, 0.5)',
                data: statsByMonth(user_debt, 1)
            },
            {
                label: 'Tổng nợ',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                data: statsByMonth(user_debt, 2)
            }
        ]
    }
    const data1Quarter = {
        labels: labelsQuarter,
        datasets: [
            {
                label: 'Đã trả',
                backgroundColor: 'rgba(119, 210, 75, 0.5)',
                data: statsByQuarter(user_debt, 0)
            },
            {
                label: 'Còn nợ',
                backgroundColor: 'rgba(231, 22, 29, 0.5)',
                data: statsByQuarter(user_debt, 1)
            },
            {
                label: 'Tổng nợ',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                data: statsByQuarter(user_debt, 2)
            }
        ]
    }
    const data1Year = {
        labels: labelsYear,
        datasets: [
            {
                label: 'Đã trả',
                backgroundColor: 'rgba(119, 210, 75, 0.5)',
                data: statsByYear(user_debt, 0)
            },
            {
                label: 'Còn nợ',
                backgroundColor: 'rgba(231, 22, 29, 0.5)',
                data: statsByYear(user_debt, 1)
            },
            {
                label: 'Tổng nợ',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                data: statsByYear(user_debt, 2)
            }
        ]
    }
    const data2Month = {
        labels: labelsMonth,
        datasets: [
            {
                label: 'Đã trả',
                backgroundColor: 'rgba(119, 210, 75, 0.5)',
                data: statsByMonth(company_debt, 0)
            },
            {
                label: 'Còn nợ',
                backgroundColor: 'rgba(231, 22, 29, 0.5)',
                data: statsByMonth(company_debt, 1)
            },
            {
                label: 'Tổng nợ',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                data: statsByMonth(company_debt, 2)
            }
        ]
    }
    const data2Quarter = {
        labels: labelsQuarter,
        datasets: [
            {
                label: 'Đã trả',
                backgroundColor: 'rgba(119, 210, 75, 0.5)',
                data: statsByQuarter(company_debt, 0)
            },
            {
                label: 'Còn nợ',
                backgroundColor: 'rgba(231, 22, 29, 0.5)',
                data: statsByQuarter(company_debt, 1)
            },
            {
                label: 'Tổng nợ',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                data: statsByQuarter(company_debt, 2)
            }
        ]
    }
    const data2Year = {
        labels: labelsYear,
        datasets: [
            {
                label: 'Đã trả',
                backgroundColor: 'rgba(119, 210, 75, 0.5)',
                data: statsByYear(company_debt, 0)
            },
            {
                label: 'Còn nợ',
                backgroundColor: 'rgba(231, 22, 29, 0.5)',
                data: statsByYear(company_debt, 1)
            },
            {
                label: 'Tổng nợ',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                data: statsByYear(company_debt, 2)
            }
        ]
    }
    const option1Month = {
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Công nợ khách hàng theo tháng',
                fontSize:20
            },
            legend:{
                display:true,
                position:'top'
            }
        }
    }
    const option1Quarter = {
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Công nợ khách hàng theo quý',
                fontSize:20
            },
            legend:{
                display:true,
                position:'top'
            }
        }
    }
    const option1Year = {
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Công nợ khách hàng theo năm',
                fontSize:20
            },
            legend:{
                display:true,
                position:'top'
            }
        }
    }
    const option2Month = {
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Công nợ công ty theo tháng',
                fontSize:20
            },
            legend:{
                display:true,
                position:'top'
            }
        }
    }
    const option2Quarter = {
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Công nợ công ty theo quý',
                fontSize:20
            },
            legend:{
                display:true,
                position:'top'
            }
        }
    }
    const option2Year = {
        responsive: true,
        plugins: {
            title:{
                display:true,
                text:'Công nợ công ty theo năm',
                fontSize:20
            },
            legend:{
                display:true,
                position:'top'
            }
        }
    }

    return (
        <Helmet title='Thống kê công nợ'>
            <div className="statistic_debt">
                <div className="statistic_debt__header page-header">
                    <h2>Thống kê công nợ</h2>
                </div>
                <div className="page-content statistic_debt__header__content">
                    <div className="page-content_statistic_debt__header__content__buttons">
                        <div className="page-content_statistic_debt__header__content__button">
                            <Buttons size='small' radius onClick={(e) => enableMonth(e)}>
                                Theo tháng
                            </Buttons>
                        </div>
                        <div className="page-content_statistic_debt__header__content__button">
                            <Buttons size='small' radius onClick={(e) => enableQuarter(e)}>
                                Theo quý
                            </Buttons>
                        </div>
                        <div className="page-content_statistic_debt__header__content__button">
                            <Buttons size='small' radius onClick={(e) => enableYear(e)}>
                                Theo năm
                            </Buttons>
                        </div>
                    </div>
                    <div className="page-content_statistic_debt__header__content__input">
                        {!showYear &&
                        <Inputs
                            type="text"
                            placeholder="Nhập năm"
                            bgcolor="white"
                            size="small"
                            value={inputValue}
                            onChange={(e) => handleInput(e)}
                            radius='true'
                            border='true'
                        />
                        }
                    </div>
        
                    {showMonth && <BarChart data={data1Month} options={option1Month} />}
                    {showQuarter && <BarChart data={data1Quarter} options={option1Quarter} />}
                    {showYear && <BarChart data={data1Year} options={option1Year} />}
                    {showMonth && <BarChart data={data2Month} options={option2Month} />}
                    {showQuarter && <BarChart data={data2Quarter} options={option2Quarter} />}
                    {showYear && <BarChart data={data2Year} options={option2Year} />}
                </div>
            </div>
        </Helmet>
      );
}