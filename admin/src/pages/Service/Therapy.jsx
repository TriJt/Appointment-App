import React, { useContext, useRef } from "react";
import { therapy } from "../../assets/fake_data";
import { Buttons, Helmet, Table } from "../../component";
import { Bin } from "../../component/Icons";
import { DialogContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Therapy = () => {
  const { dialogInfo, setDialogInfo } = useContext(DialogContext);

  const mode = useRef("");
  const navigator = useNavigate();
  // render header and body
  const headData = [
    "Mã KH",
    "Tên khách hàng",
    "Tên liệu trình",
    "Mã liệu trình",
    "Giai đoạn hiện tại",
    "Trạng thái",
    " ",
  ];

  const renderHeader = (header, index) => <th key={index}>{header}</th>;

  const renderBody = (item, index) => {
    const length = item.period.length
    const lastPeriod = item.period[length - 1]
    return (
      <tr key={index} onClick={() => navigator(item.id)}>
        <td>{item.user.id}</td>
        <td>{item.user.name}</td>
        <td>{item.name}</td>
        <td>{item.id}</td>
        <td>{lastPeriod.name}</td>
        <td className="status">{"Active"}</td>
        <td className="controls">
          <Bin onClick={handleDelete(item)} />
        </td>
      </tr>
    );
  };

  // handle create delete therapy
  const handleCreate = () => {};

  const handleDelete = therapy => e => {
    mode.current = "delete";
    e.stopPropagation()
    setDialogInfo({
      ...dialogInfo,
      isShow: true,
      title: `Xóa liệu trình?`,
      message: "Bạn có chắc muốn xóa liệu trình này?",

      onSuccess() {
        // delete therapy here
      },
    });
  };

  return (
    <Helmet title="Liệu trình">
      <div className="therapy">
        <h1 className="therapy__header page-header">Liệu trình</h1>
        <div className="therapy__content page-content">
          <div className="row">
            <div className="col-12">
              <Buttons size="small" radius>
                Thêm liệu trình
              </Buttons>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Table
                headData={headData}
                renderHead={renderHeader}
                bodyData={therapy}
                renderBody={renderBody}
              />
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Therapy;
