import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Buttons, Helmet, Inputs } from "../../component";
import { useForm } from "../../hooks";
import Select from "react-select";
import { useLocationForm } from "../../hooks/";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addCustomer} from '../../model/Customer'

export default function AddCusomer() {
  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const { form, register, handleSubmit } = useForm({
    fullName: "",
    numberPhone: "",
    Sex: "",
    emailContact: "",
    address: "",
    work: "",
    facebook: "",
    national: "",
    cmnd: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const params = {
      name: form.fullName,
      phone: form.numberPhone,
    };
    console.log(params);

    (async() =>{
      const result = await addCustomer(params)
      console.log(result)
    })()
  }
  return (
    <Helmet title="Thêm khách hàng">
      <div className="addcustomer__header">
        <div className="addcustomer__header--icon">
          <FaRegUserCircle />{" "}
        </div>
      </div>
      <div className="addcustomer__content">
        <div className="addcustomer__content--title">
          <p className="addcustomer__content--wrapper page-header">
            Thông tin khách hàng
          </p>
        </div>
        <div className="addcustomer__content--info">
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">
              Họ và tên:
            </label>
            <div className="addcustomer__content--input">
              <Inputs
                type="text"
                bgcolor="white"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                radius={true}
                {...register("fullName")}
              />
            </div>
          </div>
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">SDT:</label>
            <div className="addcustomer__content--input">
              <Inputs
                type="text"
                bgcolor="white"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                radius={true}
                {...register("numberPhone")}
              />
            </div>
          </div>
        </div>

        <div className="addcustomer__content--info">
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">
              Giới tính:
            </label>
            <div className="addcustomer__content--radio">
              <div className="addcustomer__content--radio-check">
                <input type="radio" id="boy" name="drone" value="boy" />
                <label htmlFor="boy">Nam</label>
              </div>

              <div className="addcustomer__content--radio-check">
                <input type="radio" id="girl" name="drone" value="girl" />
                <label htmlFor="girl">Nữ</label>
              </div>
            </div>
          </div>
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">Email:</label>
            <div className="addcustomer__content--input">
              <Inputs
                type="text"
                bgcolor="white"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                radius={true}
                {...register("emailContact")}
              />
            </div>
          </div>
        </div>
        <div className="addcustomer__content--info-contrainer">
          <label className="addcustomer__content--info-wrapper width80">
            Địa chỉ:
          </label>
          <div className="addcustomer__content--input widthful ">
            <Inputs
              type="text"
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("address")}
            />
          </div>
        </div>

        <div className="addcustomer__content--info">
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">
              Tỉnh thành
            </label>
          </div>
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">
              Quận/Huyện:
            </label>
          </div>
          <div className="addcustomer__content--info-contrainer ">
            <label className="addcustomer__content--info-wrapper adb">
              Phường/Xã:
            </label>
          </div>
        </div>
        <div className="addcustomer__content--info">
          <div className="addcustomer__content--info-contrainer">
            <div className="addcustomer__content--input addcustomer__content--selectCocation ">
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
          </div>
          <div className="addcustomer__content--info-contrainer">
            <div className="addcustomer__content--input addcustomer__content--selectCocation ">
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
          </div>
          <div className="addcustomer__content--info-contrainer">
            <div className="addcustomer__content--input addcustomer__content--selectCocation ">
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
          </div>
        </div>
        <div className="addcustomer__content--info">
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">
              Ngày sinh:
            </label>
            <div className="addcustomer__content--input addcustomer__content--date">
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
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">
              Nghề nghiệp:
            </label>
            <div className="addcustomer__content--input">
              <Inputs
                type="text"
                bgcolor="white"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                radius={true}
                {...register("work")}
              />
            </div>
          </div>
        </div>
        <div className="addcustomer__content--info-contrainer ">
          <label className="addcustomer__content--info-wrapper ">
            Facebook:
          </label>
          <div className="addcustomer__content--input widthful ">
            <Inputs
              type="text"
              bgcolor="white"
              size="small"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              radius={true}
              {...register("facebook")}
            />
          </div>
        </div>
        <div className="addcustomer__content--info">
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">
              Quốc tịch:
            </label>
            <div className="addcustomer__content--input">
              <Inputs
                type="text"
                bgcolor="white"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                radius={true}
                {...register("national")}
              />
            </div>
          </div>
          <div className="addcustomer__content--info-contrainer">
            <label className="addcustomer__content--info-wrapper">CMND:</label>
            <div className="addcustomer__content--input">
              <Inputs
                type="text"
                bgcolor="white"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                radius={true}
                {...register("cmnd")}
              />
            </div>
          </div>
        </div>
        <div className="addcustomer__footer">
          <div className="addcustomer__footer--button">
            <Buttons size="small" radius onClick={handleSubmitForm}>
              Lưu thay đổi
            </Buttons>
          </div>
          <div className="addcustomer__footer--button">
            <Buttons size="small" radius>
              Hủy bỏ
            </Buttons>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
