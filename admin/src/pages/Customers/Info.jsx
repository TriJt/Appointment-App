import { useEffect, useState ,useContext, useRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "../../hooks/";
import { FaFileUpload,FaFileDownload,FaUserPlus } from "react-icons/fa";
import Select from "react-select";
import { Buttons, Helmet, Inputs, Table ,FormEditor,TextEditor} from "../../component/";
import { Bin, Pencil } from "../../component/Icons";
import useLocationForm from "../../hooks/useLocationForm";
import { getCustomer, deleteCustomer } from "../../model/Customer";
import { useDispatch, useSelector } from "react-redux";
import { DialogContext } from "../../context/";


export default function Info() {
  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit,
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const { form, register, handleSubmit } = useForm({
    findCustomers: "",
    fromDate: "",
    toDate: "",
    contactStaff: "",
    staffInCharge: "",
    customerResources: "",
    customerGroup: "",
    usercustomer: "",
  });

  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [customer, setCustomer] = useState([]);
  const { dialogInfo, setDialogInfo } = useContext(DialogContext);
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({ isShow: false, title: "" });
  const mode = useRef("");
  const initialForm = {
    name: "",
    phoneNumber: "",
  };
  const { form: formCustomer, setForm, error, register: registerCustomer, handleSubmit:handleSubmitCustomer } = useForm(initialForm);
 

  const customerTableHead = [
    "#",
    "Họ tên / Số điện thoại /Email /Mã khách hàng /Chi nhánh",
    "Tổng tiền chi tiêu",
    "Hạng khách hàng",
    "Ngày tham gia",
    "",
  ];
  
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index}</td>
      <td>
        {item.name}
        <br />
        {item.phone}
        <br />
        {item.email}
      </td>
  
      <td>{item.amount}</td>
      <td>{item.rank ? item.rank : "Chưa có hạng"}</td>
      <td>
        {item.dateCreated
          ? item.dateCreated.replace(/T/, " ").replace(/\..+/, "")
          : ""}
      </td>
  
      <td className="page-icon">
        <Pencil onClick={() => handleUpdate(item)} />
        <br />
        <Bin onClick={() => handleDelete(item)}/>
      </td>
    </tr>
  );
  const handleAdd = () => {
    mode.current = "add";
    setForm(initialForm);
    setFormInfo({ isShow: true, title: "Thêm khách hàng" });
  };
 
  const handleDelete = (customer) => {
    mode.current = "delete";
    console.log(customer)
    setDialogInfo({
      ...dialogInfo,
      isShow: true,
      title: `Xóa khách hàng ${customer.name}`,
      message: "Bạn có chắc muốn xóa khách hàng này?",
      async onSuccess() {
        const params = {
          phone: customer?.phone,
        }
        const result = await deleteCustomer(params)
        console.log(result)
        dispatch({
          type: "DELETE_SMALL_customer",
          payload: {
            customerId: customer?._id,
            smallcustomerId: customer._id,
          },
        });
      },
    });
  };

  const handleUpdate = (currentData) => {
    mode.current = "update";
    setForm({
      ...formCustomer,
      ...currentData,
    });
    setFormInfo({ isShow: true, title: "Cập nhật thông tin khách hàng" });
  };
  const handleClickSubmitBtn = () => {
    let callback;
    if (mode.current == "create") {
      callback = () => {
        dispatch({
          type: "CREATE_CUSTOMER",
          payload: formCustomer,
        });
      };
    }
    if (mode.current == "add") {
      callback = () => {
        dispatch({
          type: "ADD_CUSTOMER",
          payload: {
            ...form,
            customer: customer._id,
          },
        });
      };
    }
    if (mode.current == "update") {
      callback = () => {
        // update here
      };
    }

    handleSubmitCustomer(() => {
      callback();
      setFormInfo({...formInfo, isShow: false});
    });
  };
  useEffect(() => {
    (async () => {
      const data = await getCustomer();
      setCustomer(data.list[0].list);
      console.log(data.list[0].list);
    })();
  }, []);

  return (
    <Helmet title="Thông tin khách hàng">
      <div className="info-container">
        <div className="info-header">
          <h2 className="page-header info-header--wraper">
            Quản lý khách hàng
          </h2>
          <div className="info-header--button">
            <Buttons size="small" radius>
              <FaFileUpload />  ... Nạp danh sách
            </Buttons>
          </div>
          <div className="info-header--button">
            <Buttons size="small" radius>
              <FaFileDownload />  ... Xuất danh sách
            </Buttons>
          </div>
        </div>

        <div className="info-content">
          <div className="info-content--button">
            <Buttons onClick={handleAdd} size="small" radius>
            <FaUserPlus /> ..Đăng ký khách hàng
            </Buttons>
          </div>

          <div className="info-content--input">
            <Inputs
              type="text"
              placeholder="Tìm khách hàng ,phone ,mã giới thiệu.."
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("findCustomers")}
            />
          </div>

          <div className="info-content--input info-content--date">
            <DatePicker
              placeholderText="Từ ngày"
              selected={selectedToDate}
              onChange={(date) => setSelectedToDate(date)}
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
            />
          </div>

          <div className="info-content--input info-content--date">
            <DatePicker
              placeholderText="Đến ngày"
              selected={selectedFromDate}
              onChange={(date) => setSelectedFromDate(date)}
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
            />
          </div>
          <div className="info-content--button">
            <Buttons size="small" radius>
              Lọc
            </Buttons>
          </div>
          <div className="info-content--button">
            <Buttons size="small" radius>
              Khôi phục
            </Buttons>
          </div>

          <div className="info-content--input">
            <Inputs
              type="text"
              placeholder="NV liên hệ"
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("contactStaff")}
            />
          </div>

          <div className="info-content--input">
            <Inputs
              type="text"
              placeholder="NV phụ trách"
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("staffInCharge")}
            />
          </div>
          <div className="info-content--input">
            <Inputs
              type="text"
              placeholder="Nguồn khách hàng"
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("customerResources")}
            />
          </div>
          <div className="info-content--input">
            <Inputs
              type="text"
              placeholder="Nhóm khách hàng"
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("customerGroup")}
            />
          </div>
          <div className="info-content--input info-content--selectCocation">
            <Select
              name="cityId"
              key={`cityId_${selectedCity?.value}`}
              isDisabled={cityOptions.length === 0}
              options={cityOptions}
              onChange={(option) => onCitySelect(option)}
              placeholder="Tỉnh/Thành"
              defaultValue={selectedCity}
            />
          </div>
          <div className="info-content--input info-content--selectCocation">
            <Select
              name="districtId"
              key={`districtId_${selectedDistrict?.value}`}
              isDisabled={districtOptions.length === 0}
              options={districtOptions}
              onChange={(option) => onDistrictSelect(option)}
              placeholder="Quận/Huyện"
              defaultValue={selectedDistrict}
            />
          </div>
          <div className="info-content--input info-content--selectCocation">
            <Select
              name="wardId"
              key={`wardId_${selectedWard?.value}`}
              isDisabled={wardOptions.length === 0}
              options={wardOptions}
              placeholder="Phường/Xã"
              onChange={(option) => onWardSelect(option)}
              defaultValue={selectedWard}
            />
          </div>

          <div className="info-content--input">
            <Inputs
              type="text"
              placeholder="Dịch vụ đã sử dụng"
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("usercustomer")}
            />
          </div>
          <div className="info-content--input info-content--date">
            <DatePicker
              placeholderText="Chọn tháng sinh nhật"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
              
                <Table
                  limit="10"
                  headData={customerTableHead}
                  renderHead={(item, index) =>
                    renderHead(item, index)
                  }
                  bodyData={customer}
                  renderBody={(item, index) =>
                    renderBody(item, index)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <FormEditor info={formInfo} setInfo={setFormInfo} title="">
        <Inputs
          type="text"
          placeholder="Nhập tên khách hàng"
          bgcolor="white"
          border
          label="Tên khách hàng"
          error={error?.name}
          {...registerCustomer("name")}
        />
        <Inputs
          type="text"
          placeholder="Nhập số điện thoại.."
          bgcolor="white"
          border
          label="Số điện thoại"
          error={error?.phoneNumber}
          {...registerCustomer("phoneNumber")}
        />
        
        <Buttons radius size="middle" onClick={() => handleClickSubmitBtn()}>
          Xác nhận
        </Buttons>
      </FormEditor>
      </div>
    </Helmet>
  );
}
