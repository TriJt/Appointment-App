import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Buttons, FormEditor, Helmet, Inputs, Table } from "../../component";
import { therapy } from "../../assets/fake_data";
import { Bin, Pencil } from "../../component/Icons";
import { DialogContext } from "../../context";
import { useForm } from "../../hooks";

export default function TherapyDetail() {
  const initialForm = {
    period: "",
    createAt: "",
    time: "",
    description: "",
    image: null,
  };
  const { form, setForm, register, handleSubmit, error } = useForm(initialForm);
  const { id } = useParams();
  const [currentTherapy, setCurrentTherapy] = useState({});
  const [formInfo, setFormInfo] = useState({ title: "", isShow: false });

  const { dialogInfo, setDialogInfo } = useContext(DialogContext);
  const mode = useRef("");

  // render header anh body
  const headData = ["#", "Giai đoạn", "Ngày bắt đầu", "Thời gian", "Mô tả", "Hình ảnh", ""];
  const renderHeader = (header, index) => <th key={index}>{header}</th>;
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.createAt}</td>
      <td>{item.time}</td>
      <td>{item.description}</td>
      <td>{item.image}</td>
      <td className="controls">
        <Pencil onClick={() => handleUpdate(item)} />
        <Bin onClick={() => handleDelete(item)} />
      </td>
    </tr>
  );

  // handle select and options
  const periodOptions = [
    { label: "Trước", value: "truoc" },
    { label: "Trong", value: "trong" },
    { label: "Sau", value: "sau" },
  ];

  // handle create update delete

  const handleCreate = () => {};
  const handleUpdate = (therapy) => {
    mode.current = "update";
    setForm({
      ...form,
      ...therapy,
    });
    setFormInfo({
      title: "Cập nhật liệu trình",
      isShow: true,
    });
  };
  const handleDelete = (therapy) => {
    mode.current = "delete";
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
  // handle submit
  const handleSubmitBtn = () => {
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
  // handle useEffects
  useEffect(() => {
    const newTherapy = therapy.find((item) => item.id == id);
    setCurrentTherapy(newTherapy);
  }, [id]);

  console.log(form);
  return (
    <Helmet title="chi tiết liệu trình">
      <div className="therapyDetail">
        <h1 className="therapyDetail__header page-header">Chi tiết liệu trình</h1>
        <div className="therapyDetail__content page-content">
          <div className="row">
            <div className="col-6">
              <Buttons size="small" radius onClick={handleCreate}>
                Thêm ngày
              </Buttons>
            </div>
            <div className="col-6">
              <div className="customer-info">
                <p>Tên khách hàng: {currentTherapy.user?.name}</p>
                <p>Mã khách hàng: {currentTherapy.user?.id}</p>
                <p>Tên liệu trình: {currentTherapy.name}</p>
                <p>
                  Giai đoạn hiện tại:{" "}
                  {currentTherapy.period?.[currentTherapy.period.length - 1].name}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Table
                headData={headData}
                renderHead={renderHeader}
                bodyData={currentTherapy?.period}
                renderBody={renderBody}
              />
            </div>
          </div>
        </div>
      </div>

      <FormEditor info={formInfo} setInfo={setFormInfo}>
        <Inputs
          type="select"
          options={periodOptions}
          label="Giai đoạn"
          {...register("period")}
          value={periodOptions.find((option) => option.value == form.period)}
          onChange={(option) => setForm({ ...form, period: option.value })}
          placeholder="Chọn giai đoạn"
        />
        <Inputs type="date" border label="Ngày bắt đầu" {...register("createAt")} />
        <Inputs type="number" border label="Thời gian" {...register("time")} />
        <Inputs type="text" border label="Mô tả" {...register("description")} />
        <Inputs type="file" label="Hình ảnh" {...register("image")} />
        <Buttons radius size="middle" onClick={() => handleSubmitBtn()}>
          Xác nhận
        </Buttons>
      </FormEditor>
    </Helmet>
  );
}
