import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Buttons, Inputs, Popup, TextEditor } from "../../component";
import { useForm } from "../../hooks";
import { closeEditbox } from "../../store/slices/editboxSlice";


const EditCustomer = (props) => {
  const { form, setForm, error, register, handleSubmit } = useForm({
    name: props.data?.name || "",
    phoneNumber: props.data?.phoneNumber || "",
  });

  const dispatch = useDispatch();
  const [contentEditor, setContentEditor] = useState(
    props.data?.content || ""
  );

  // ---- handle action ----

  const handleClose = () => {
    dispatch(closeEditbox());
  };
  const handleClickBtn = () => {
    let callback;

    if (props.mode == "create") {
      callback = () => {
        dispatch({
          type: "CREATE_SERVICE",
          payload: form,
        });
        handleClose();
      };
    }

    if (props.mode == "update") {
      console.log("Cập nhật khách hàng>>>>", form);
    }

    if (props.mode == "add") {
      callback = () => {
        dispatch({
          type: "ADD_SERVICE",
          payload: {
            ...form,
            serviceId: props.serviceId,
          },
        });
        handleClose();
      };
    }

    handleSubmit(() => {
      callback();
    }, ["phoneNumber"]);
  };

  // ---- handle effect ----

  useEffect(() => {
    setForm({
      ...form,
      name: props.data?.name || "",
      phoneNumber: props.data?.phoneNumber || "",
    });
    setContentEditor(props.data.content);
  }, [props.data]);

  useEffect(() => {
    setForm({
      ...form,
      content: contentEditor || "",
    });
  }, [contentEditor]);

  return (
    <Popup isShow={props.isShow}>
      <div className="editbox active">
        <div className="editbox__form">
          <div className="editbox__form--title">
            <h2>
              {props.mode == "create" && "Tạo trang mới"}
              {props.mode == "update" && "Chỉnh sửa thông tin khách hàng"}
              {props.mode == "add" && "Thêm khách hàng mới"}
            </h2>
          </div>
          <form className="row">
            <div className="col-6">
              <div className="form__group">
                <Inputs
                  type="text"
                  placeholder="Nhập tên khách hàng"
                  bgcolor="white"
                  border
                  label="Tên khách hàng"
                  error={error.name}
                  {...register("name")}
                />
              </div>
            </div>
            <div className="col-6">
                <div className="form__group">
                <Inputs
                  type="text"
                  placeholder="Nhập số điện thoại.."
                  bgcolor="white"
                  border
                  label="Số điện thoại"
                  error={error.phoneNumber}
                  {...register("phoneNumber")}
                  
                />
              </div>
            </div>
            
          </form>
          <div className="row">
            <div className="col-9 editbox__form--submit">
            </div>
            <div className="col-3 editbox__form--submit">
              <Buttons
                size="small"
                border
                radius
                color="black"
                bgcolor="white"
                onClick={handleClickBtn}
              >
                Xác nhận
              </Buttons>
              
            </div>
          </div>
          
          <div className="editbox__close" onClick={handleClose}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default EditCustomer;
