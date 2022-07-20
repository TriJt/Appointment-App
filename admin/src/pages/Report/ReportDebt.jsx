import React, { useEffect, useState } from "react";

import { user_debt, company_debt } from "../../assets/fake_data";
import { Table, Helmet, Inputs } from "../../component";

const customerTableHead = [
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

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => <td key={index}>{item}</td>;

export default function ReportDebt() {
    const [inputValue1, setInputValue1] = useState(new Date().getFullYear());
    const [inputValue2, setInputValue2] = useState(new Date().getFullYear());
    const [filteredData1, setFilteredData1] = useState([]);
    const [filteredData2, setFilteredData2] = useState([]);

    const handleYearInput1 = (event) => setInputValue1(event.target.value);
    const handleYearInput2 = (event) => setInputValue2(event.target.value);

    const handleFilter1 = (event) => {
        const dataList = []
        for(let i = 1; i <= 12; i++) {
            const newData = user_debt.filter((item) => {
                const itemDate = new Date(item.datePaid);
                const itemMonth = itemDate.getMonth() + 1;
                const itemYear = itemDate.getFullYear();
            
                return itemMonth == i && itemYear == inputValue1;
            });

            dataList.push(totalDebt(newData))
        }
    
        setFilteredData1(dataList);
    };
    const handleFilter2 = (event) => {
        const dataList = []
        for(let i = 1; i <= 12; i++) {
            const newData = company_debt.filter((item) => {
                const itemDate = new Date(item.datePaid);
                const itemMonth = itemDate.getMonth() + 1;
                const itemYear = itemDate.getFullYear();
            
                return itemMonth == i && itemYear == inputValue2;
            });

            dataList.push(totalDebt(newData))
        }
    
        setFilteredData2(dataList);
    };

    const totalDebt = (newData) => {
        let sum = 0;
        newData.forEach((item) => (sum += Number(item.debt)));
        console.log(sum);
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(sum);
    };

    useEffect(() => {
        handleFilter1();
        handleFilter2();
    }, [inputValue1, inputValue2]);
    
    return(
        <Helmet title="Báo cáo công nợ">
            <div className="report_debt">
                <h2 className="report_debt__header page-header">
                    Báo cáo công nợ
                </h2>
                <div className="report_debt__content page-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="report_customer_debt_title">
                                Công nợ khách hàng năm
                                    <div className="report_customer_debt_title_input">
                                    <Inputs
                                        type="text"
                                        placeholder="Nhập năm"
                                        bgcolor="white"
                                        size="small"
                                        value={inputValue1}
                                        onChange={(e) => {
                                            handleYearInput1(e);
                                            handleFilter1(e);
                                        }}
                                        radius='true'
                                        border='true'
                                    />
                                    </div>
                            </div>
                            <div className="report_customer_debt">
                                <Table
                                    headData={customerTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={filteredData1}
                                    renderBody={(item, index) => renderBody(item, index)}
                                />
                            </div>
                            <div className="report_customer_debt_chart">
                                {/*<BarChart
                                    data={data1}
                                    options={option1}
                                /> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="report_company_debt_title">
                                Công nợ công ty năm 
                                <div className="report_company_debt_title_input">
                                <Inputs
                                    type="text"
                                    placeholder="Nhập năm"
                                    bgcolor="white"
                                    size="small"
                                    value={inputValue2}
                                    onChange={(e) => {
                                        handleYearInput2(e);
                                        handleFilter2(e);
                                    }}
                                    radius='true'
                                    border='true'
                                />
                                </div>
                            </div>
                            <div className="report_company_debt">
                                <Table
                                    headData={customerTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={filteredData2}
                                    renderBody={(item, index) => renderBody(item, index)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}