import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "../../hooks";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Buttons, FormEditor, Helmet, Inputs, Table, TextEditor } from "../../component";

import { Bin, Pencil } from "../../component/Icons";
import { DialogContext } from "../../context/";

export default function ServiceAndPost() {
  const { data: service } = useSelector((store) => store.service);
  const [selectedService, setSelectedService] = useState({});
  const [contentEditor, setContentEditor] = useState("");

  const [formInfo, setFormInfo] = useState({ isShow: false, title: "" });
  const { dialogInfo, setDialogInfo } = useContext(DialogContext);
  const mode = useRef("");

  const dispatch = useDispatch();

  const initialForm = {
    name: "",
    description: "",
    content: "",
  };
  const { form, setForm, error, register, handleSubmit } = useForm(initialForm);

  // ----- handle create add update delete --------
  const handleCreate = () => {
    mode.current = "create";
    setForm(initialForm);
    setContentEditor("");
    setFormInfo({ isShow: true, title: "Thêm trang" });
  };
  const handleDelete = (service) => {
    mode.current = "delete";
    setDialogInfo({
      ...dialogInfo,
      isShow: true,
      title: `Xóa dịch vụ ${service.name}`,
      message: "Bạn có chắc muốn xóa dịch vụ này?",

      onSuccess() {
        dispatch({
          type: "DELETE_SMALL_SERVICE",
          payload: {
            serviceId: selectedService?._id,
            smallserviceId: service._id,
          },
        });
      },
    });
  };
  const handleUpdate = (currentData) => {
    mode.current = "update";
    setForm({
      ...form,
      ...currentData,
    });
    setContentEditor(currentData.content);
    setFormInfo({ isShow: true, title: "Cập nhật dịch vụ" });
  };
  const handleAdd = () => {
    mode.current = "add";
    setForm(initialForm);
    setContentEditor("");
    setFormInfo({ isShow: true, title: "Thêm dịch vụ" });
  };
  const handleDeletePage = () => {
    mode.current = "delete";
    setDialogInfo({
      ...dialogInfo,
      isShow: true,
      title: `Xóa trang ${selectedService.name}`,
      message: "Bạn có chắc muốn xóa trang này?",
      onSuccess() {
        dispatch({
          type: "DELETE_SERVICE",
          payload: {
            serviceId: selectedService?._id,
          },
        });
      },
    });
  };

  const handleClickSubmitBtn = () => {
    let callback;
    if (mode.current == "create") {
      callback = () => {
        dispatch({
          type: "CREATE_SERVICE",
          payload: form,
        });
      };
    }
    if (mode.current == "add") {
      callback = () => {
        dispatch({
          type: "ADD_SERVICE",
          payload: {
            ...form,
            serviceId: selectedService._id,
          },
        });
      };
    }
    if (mode.current == "update") {
      callback = () => {
        // update here
      };
    }

    handleSubmit(() => {
      callback();
      setFormInfo({...formInfo, isShow: false});
    });
  };

  // ----- data and render function of header and body --------
  const headers = ["id", "name", "description", "content", ""];

  const renderHeader = (header, index) => <th key={index}>{header}</th>;

  const renderBody = (item, index) => (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td>{item.name ? item.name : ""}</td>
      <td>{item.description}</td>
      <td>{item.content ? item.content : ""}</td>
      <td className="controls">
        <Pencil onClick={() => handleUpdate(item)} />
        <Bin onClick={() => handleDelete(item)} />
      </td>
    </tr>
  );

  // ----- handle select -----
  const handleSelectedService = useCallback(
    (option) => {
      const currentService = service?.find((item) => item._id == option.value);
      setSelectedService(currentService);
    },
    [service]
  );

  // ----- handle asynchronous -----

  useEffect(() => {
    if (service?.length > 0) setSelectedService(service[0]);
  }, []);

  useEffect(() => {
    setSelectedService(service?.[0]);
  }, [service]);

  useEffect(() => {
    setForm({
      ...form,
      content: contentEditor || "",
    });
  }, [contentEditor]);
  return (
    <Helmet title="Dịch vụ và bài viết">
      <div className="service">
        <h2 className="service__header page-header">Dịch vụ và bài viết</h2>
        <div className="service__content page-content">
          <div className="row">
            <div className="col-4">
              <Buttons size="small" radius onClick={handleCreate}>
                Thêm trang
              </Buttons>
            </div>
            <div className="col-4">
              <Buttons size="small" radius onClick={handleAdd}>
                Thêm dịch vụ
              </Buttons>
            </div>
            <div className="col-4">
              <Buttons size="small" radius onClick={handleDeletePage}>
                Xóa trang
              </Buttons>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Inputs
                type="select"
                value={{
                  value: selectedService,
                  label: selectedService?.name,
                }}
                icon={<IoIosArrowDown />}
                onChange={(option) => handleSelectedService(option)}
                options={service?.map((option) => ({
                  value: option._id,
                  label: option.name,
                }))}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Table
                limit="10"
                headData={headers}
                renderHead={renderHeader}
                bodyData={selectedService?.smallservice}
                renderBody={renderBody}
              />
            </div>
          </div>
        </div>
      </div>
      <FormEditor info={formInfo} setInfo={setFormInfo} title="">
        <Inputs
          type="text"
          placeholder="Tìm nhanh KH.."
          bgcolor="white"
          border
          label="Tên dịch vụ"
          error={error?.name}
          {...register("name")}
        />
        <Inputs
          type="textarea"
          placeholder="Tìm nhanh KH.."
          bgcolor="white"
          border
          label="Mô tả"
          error={error?.description}
          {...register("description")}
        />
        <TextEditor
          label="Nội dung"
          init={{
            selector: "div", // change this value according to your HTML
            maxHeight: 500,
            plugins: "image",
            a11y_advanced_options: true,
            block_unsupported_drop: false,
            content_style: ".tox-tinymce{border: 2px solid black}",
          }}
          onEditorChange={setContentEditor}
          value={contentEditor}
          error={error?.content}
        />
        <Buttons radius size="middle" onClick={() => handleClickSubmitBtn()}>
          Xác nhận
        </Buttons>
      </FormEditor>
    </Helmet>
  );
}
