import { useEffect, useState } from "react";

import { users } from "../../assets/fake_data";
import { Helmet, Inputs, Table } from "../../component";
import { Bin, Pencil } from "../../component/Icons";
import { getRank } from "../../model/Rank";

// filter option
const filterByTime = [
  {
    label: "Theo Ngày",
    value: "day",
  },
  {
    label: "Theo Tháng",
    value: "month",
  },
  {
    label: "Theo Năm",
    value: "year",
  },
];

const filterCustomer = [
  {
    label: "Khách hàng mới",
    value: "NEW",
  },
  {
    label: "Khách hàng cũ",
    value: "OLD",
  },
  {
    label: "Khách hàng vip",
    value: "VIP",
  },
];

// filter function
const filterNewCustomer = (currentTime) => {
  let today = new Date();
  let newRenderData = [];

  newRenderData = users.filter((item) => {
    let itemDate = new Date(item.createAt);
    switch (currentTime) {
      case "day":
        return formatDate(itemDate) == formatDate(today);
      case "month":
        return today.getMonth() == itemDate.getMonth();
      case "year":
        return today.getFullYear() == itemDate.getFullYear();
    }
  });

  return newRenderData;

};

const filterOldCustomer = (currentTime) => {
  let newCustomers = filterNewCustomer(currentTime);
  let oldCustomers = users.filter(user => !newCustomers.includes(user))
  return oldCustomers;
};

const filterVipCustomer = (currentRank) => {
  let newRenderData = [];
  newRenderData = users.filter((item) => item.rankId == currentRank.value);
  return newRenderData;
};

// data and render headers
const headers = ["#", "Họ tên", "Tổng chi tiêu", "Ngày tham gia"];
const renderHeaders = (item, index) => <th key={index}>{item}</th>;

export default function Statistical() {
  const [renderData, setRenderData] = useState(users);
  const [rank, setRank] = useState([]);
  const [selectedRank, setSelectedRank] = useState();

  const [inputDate, setInputDate] = useState(formatDate());
  const [customerType, setCustomerType] = useState("NEW");
  const [timeFilter, setTimeFilter] = useState(filterByTime[0]);

  //  render body
  const renderBody = (body, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{body.name}</td>
      <td>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(body.totalSpending)}
      </td>
      <td>{body.createAt}</td>
      
    </tr>
  );

  // handle asynchronous
  useEffect(() => {
    (async () => {
      const data = await getRank();
      setRank(data.list[0].list);
      setSelectedRank({
        value: data.list[0].list[0]._id,
        label: data.list[0].list[0].rank,
      });
    })();
  }, []);

  useEffect(() => {
    let newData = [];
    if (customerType == "NEW") newData = filterNewCustomer(timeFilter.value);
    else if (customerType == "OLD") newData = filterOldCustomer(timeFilter.value);
    else newData = filterVipCustomer(selectedRank);

    setRenderData(newData)
  }, [timeFilter, customerType, selectedRank]);

  return (
    <Helmet title="Thống kê khách hàng">
      <div className="statistical">
        <div className="page-header statistical__header">
          <h2>Thống kê khách hàng</h2>
        </div>

        <div className="page-content statistical__content">
          <div className="statistical__content--filter">
            <div className="row">
              <div className="col-4 col-md-12">
                <Inputs
                  type="select"
                  options={filterCustomer}
                  onChange={(option) => setCustomerType(option.value)}
                  defaultValue={filterCustomer[0]}
                />
              </div>
              <div className="col-4 col-md-12">
                {customerType == "VIP" ? (
                  <Inputs
                    type="select"
                    border
                    options={rank?.map((item) => ({
                      label: item.rank,
                      value: item._id,
                    }))}
                    value={selectedRank}
                    defaultValue={selectedRank}
                    onChange={(option) => setSelectedRank(option)}
                  />
                ) : (
                  <Inputs
                    type="select"
                    options={filterByTime}
                    onChange={(option) => setTimeFilter(option)}
                    value={timeFilter}
                    defaultValue={filterByTime[0]}
                  />
                )}
              </div>

              {/* <div className="col-4 col-md-12">
                {customerType == "OLD" && (
                  <Inputs
                    type="date"
                    value={inputDate}
                    border
                    onChange={(e) => setInputDate(e.target.value)}
                  />
                )}
              </div> */}
            </div>
          </div>
          <Table
            limit="10"
            headData={headers}
            renderHead={renderHeaders}
            bodyData={renderData}
            renderBody={renderBody}
          />
        </div>
      </div>
    </Helmet>
  );
}

// format date to input html
function formatDate(date = new Date()) {
  return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join(
    "-"
  );
}
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
