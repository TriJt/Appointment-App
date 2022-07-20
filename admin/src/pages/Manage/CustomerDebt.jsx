import React, { useEffect, useState } from "react";

import { user_debt, months } from "../../assets/fake_data";
import { Table, Helmet, Inputs } from "../../component";
import { BiDownArrow } from "react-icons/bi";

const customerTableHead = [
  "",
  "Tên",
  "SĐT",
  "Trạng thái",
  "Lãi suất",
  "Đã trả",
  "Chưa trả",
  "Tổng nợ",
  "Ngày trả cuối",
  "Miêu tả"
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.phone}</td>
    <td>{item.state}</td>
    <td>{item.interestRate}</td>
    <td>{item.paid}</td>
    <td>{item.owed}</td>
    <td>{item.debt}</td>
    <td>{item.datePaid}</td>
    <td>{item.description}</td>
  </tr>
);



export default function CustomerDebt() {
  const [inputValue, setInputValue] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [filteredData, setFilteredData] = useState([]);

  const handleMonthChange = (event) => setCurrentMonth(event.value);
  const handleYearInput = (event) => setInputValue(event.target.value);

  const handleFilter = (event) => {
    const newData = user_debt.filter((item) => {
      const itemDate = new Date(item.datePaid);
      const itemMonth = itemDate.getMonth() + 1;
      const itemYear = itemDate.getFullYear();

      return itemMonth == currentMonth && itemYear == inputValue;
    });

    setFilteredData(newData);
  };

  const setDate = () => {
    return `Tháng ${currentMonth} năm ${inputValue}`;
  };

  const totalDebt = () => {
    let sum = 0;
    filteredData.forEach((item) => (sum += Number(item.debt)));
    console.log(sum);
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(sum);
  };

  const optionsSelect = months.map(item => ({
    value: item.id,
    label: item.month
  }))

  useEffect(() => {
    handleFilter();
  }, [inputValue, currentMonth]);

  return (
    <Helmet title="Công nợ khách hàng">
      <div className="customer_debt">
        <h2 className="customer_debt__header page-header">
          Công nợ khách hàng
        </h2>
        <div className="customer_debt__content page-content">
          <div className="row">
            <div className="col-12">
              <div className="month-select">
                <Inputs
                  type="select"
                  placeholder="Nhập tháng"
                  icon={<BiDownArrow />}
                  onChange={option => {
                    handleMonthChange(option);
                    handleFilter();
                  }}
                  options={optionsSelect}
                  defaultValue={optionsSelect.find(item => item.value == currentMonth)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="year-input">
                <Inputs
                  type="text"
                  placeholder="Nhập năm"
                  bgcolor="white"
                  size="small"
                  value={inputValue}
                  onChange={(e) => {
                    handleYearInput(e);
                    handleFilter(e);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="total_debt">
                Tổng công nợ {setDate()}: {totalDebt()}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Table
                limit="7"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={filteredData}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
