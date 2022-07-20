import { useContext, useEffect, useRef, useState } from "react";
import { Buttons, FormEditor, Helmet, Inputs, Table } from "../../component";
import { Bin, Pencil } from "../../component/Icons";
import { DialogContext } from "../../context";
import { useForm } from "../../hooks";
import { getRank } from "../../model/Rank";


export default function Classify() {
  const initialForm = {
    rank: "",
    benefit: "",
    bonus: "",
    discount: "",
    level: "",
    color: "#f6b73c",
  };
  const { form, setForm, register, handleSubmit, error } = useForm(initialForm);
  const [formInfo, setFormInfo] = useState({ isShow: false, title: "" });
  const { dialogInfo, setDialogInfo } = useContext(DialogContext);

  const [rank, setRank] = useState([]);
  var mode = useRef("");

  // ----- handle create update delete --------
  const handleCreate = () => {
    mode.current = "create";
    setForm(initialForm);
    setFormInfo({
      title: "Thêm hạng",
      isShow: true,
    });
  };
  const handleDelete = () => {
    mode.current = "delete";
    setDialogInfo({
      ...dialogInfo,
      isShow: true,
      title: `Xóa hạng`,
      message: "Bạn có chắc muốn xóa hạng này?",

      onSuccess() {
        // delete rank here
      },
    });
  };
  const handleUpdate = (currentData) => {
    mode.current = "update";
    setForm({
      ...form,
      ...currentData,
    });
    setFormInfo({
      title: "Cập nhật hạng",
      isShow: true,
    });
  };
  const handleClickSubmitBtn = () => {
    let callback;
    if (mode.current == "create") {
      callback = () => {
        // create here
      };
    }
    if (mode.current == "update") {
      callback = () => {
        // update here
      };
    }

    handleSubmit(() => {
      callback();
      setFormInfo({
        ...formInfo,
        isShow: false,
      });
    });
  };

  // render header and body
  const headerData = [
    "#",
    "Hạng",
    "Mức đạt",
    "% giảm trên bill",
    "% tiền thưởng",
    "Quyền lợi",
    "Trạng Thái",
    "",
  ];
  const renderHeader = (header, index) => <th key={index}>{header}</th>;
  const renderBody = (body, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td className="rank">{body.rank}</td>
      <td>
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(body.level)}
      </td>
      <td>{body.discount}%</td>
      <td>{body.bonus}%</td>
      <td>{body.benefit}</td>
      <td className="status">{body.active == true && "Active"}</td>
      <td className="controls">
        <Pencil onClick={() => handleUpdate(body)} />
        <Bin onClick={handleDelete} />
      </td>
    </tr>
  );

  // handle asynchronous
  useEffect(() => {
    (async () => {
      const data = await getRank();
      setRank(data.list[0].list);
    })();
  }, []);


  return (
    <Helmet title="Phân hạng khách hàng">
      <div className="classify">
        <h2 className="classify__header page-header">Phân hạng khách hàng</h2>
        <div className="classify__content page-content">
          <div className="row">
            <div className="col-12">
              <Buttons size="small" radius onClick={handleCreate}>
                Thêm hạng
              </Buttons>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Table
                headData={headerData}
                renderHead={renderHeader}
                bodyData={rank}
                renderBody={renderBody}
              />
            </div>
          </div>
        </div>
      </div>

      <FormEditor info={formInfo} setInfo={setFormInfo}>
        <Inputs
          type="text"
          border
          {...register("rank")}
          placeholder="Nhập tên hạng"
          label="Tên hạng"
          error={error.rank}
        />

        <Inputs
          type="text"
          border
          {...register("benefit")}
          placeholder="Nhập quyền lợi"
          label="Quyền lợi"
          error={error.benefit}
        />
        <Inputs
          type="text"
          border
          {...register("bonus", { mustNumber: true })}
          placeholder="Nhập tiền thưởng"
          label="Tiền thưởng (%)"
          error={error.bonus}
        />
        <Inputs
          type="text"
          border
          {...register("discount", { mustNumber: true })}
          placeholder="Giảm trên bill"
          label="Giảm trên bill (%)"
          error={error.discount}
        />
        <Inputs
          type="text"
          border
          {...register("level", { mustNumber: true })}
          placeholder="Mức đạt"
          label="Mức đạt"
          error={error.level}
        />
        <Inputs
          type="color"
          size="max-content"
          border
          {...register("color")}
          label="Màu chữ"
          error={error.color}
        />

        <Buttons radius size="middle" onClick={() => handleClickSubmitBtn()}>
          Xác nhận
        </Buttons>
      </FormEditor>
    </Helmet>
  );
}
