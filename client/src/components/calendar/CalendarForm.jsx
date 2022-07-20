import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { getBranch, insertBooking } from "../../model/branch.js";
import { getService } from '../../model/navigator.js'
import { logo } from '../../assets/images/';
import Input from './Input.jsx';
import { format } from 'date-fns';

export default function CalendarForm({ setIsFormShow }) {
    const [form, setForm] = useState({
        branchId: '',
        customer: '',
        time: '',
        date: new Date(),
        city: '',
        selectedService: '',
        phoneNumber: '',
        note: '',
    })
    const [error, setError] = useState({})
    const [dateState, setDateState] = useState(new Date());
    const [service, setService] = useState([])
    const [branch, setBranch] = useState([])
    const [isServiceFetching, setIsServiceFetching] = useState(true)
    const [isBranchFetching, setIsBranchFetching] = useState(true)

    const handleChange = e => {
        e.preventDefault();
        let value = e.target.value;
        let name = e.target.name

        if (name == 'date') {
            value = new Date(value)
        }

        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        let errorObj = {}
        const { customer, phoneNumber, city, branchId, date, selectedService, note } = form;
        if (customer == "") errorObj.customer = "Vui lòng nhập họ tên"

        if (phoneNumber == "") errorObj.phoneNumber = "Vui lòng nhập số điện thoại"

        if (city == "") errorObj.city = "Vui lòng chọn khu vực"

        if (branchId == "") errorObj.branchId = "Vui lòng chọn chi nhánh"

        if (date == "") errorObj.date = "Vui lòng chọn thời gian"
        else if (date?.getHours() < 8 || date?.getHours() > 16) errorObj.date = "Vui lòng chọn khoảng thời gian từ 8h đến 16h hàng ngày"
        else if (date < new Date()) errorObj.date = "Vui lòng chọn khoảng thời gian trong tương lai"

        if (selectedService == "") errorObj.selectedService = "Vui lòng chọn dịch vụ";
        if (Object.keys(errorObj).length == 0) {
            const param = {
                branchId: branchId,
                customer: customer,
                phoneNumber: phoneNumber,
                city: city,
                date: date,
                service: selectedService,
                note: note,
            }
            insertBooking(param).then(res => {
                console.log(res);
                if (res.error) {
                    setError(res.list[0].message)
                } else {
                    setError(res.list[0].message)
                    setForm({
                        ...form,
                        customer: '',
                        phoneNumber: ''
                    })
                }
            })
            setIsFormShow(false)
            alert('Gửi file thành công')
        }
        else {
            setError(errorObj)
        }


    }
    const onSubmit = data => e => {
        e.preventDefault();
        console.log(data)
    };

    useEffect(() => {
        (async () => {
            setIsServiceFetching(true)
            const data = await getService();
            setService(data.list)
            setIsServiceFetching(false)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            setIsBranchFetching(true)
            const temp = []
            const data = await getBranch();
            data.list.map(branch => {
                let check = false;
                temp.length > 0
                    ? temp.map(item => {
                        if (item.city == branch.city) {
                            check = true;
                            item.chinhanh.push(branch);
                        }
                    })
                    : check = false;
                if (!check) {
                    temp.push({
                        city: branch.city,
                        chinhanh: [branch]
                    });
                }
            })
            setBranch(temp)
            setIsBranchFetching(false)
        })()
    }, [])
    console.log(branch)
    return (
        <div className='calendar__form'>
            <div className="calendar__form--wrapper">
                <div className="img"><img src={logo} alt="" /></div>
                <h3>Đặt lịch hẹn</h3>
                <form action="" className='grid grid-col-2 grid-col-sm-1'>
                    <div className="form-group">
                        <Input
                            value={form.customer}
                            name='customer'
                            placeholder='Họ và tên'
                            onChange={handleChange}
                            error={error.customer}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            value={form.phoneNumber}
                            name='phoneNumber'
                            placeholder='Số điện thoại'
                            onChange={handleChange}
                            error={error.phoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            type='select'
                            value={form.city}
                            name='city'
                            placeholder='Họ và tên'
                            onChange={handleChange}
                            error={error.city}
                        >
                            <option value='' disabled={true}>Chọn khu vực</option>
                            {
                                !isBranchFetching && branch.length > 0
                                    ? branch.map((city, index) => (
                                        <option key={index} value={city.city}>{city.city}</option>)
                                    )
                                    : null
                            }
                        </Input>
                    </div>
                    <div className="form-group">
                        <Input
                            type='select'
                            value={form.branchId}
                            name='branchId'
                            placeholder='Họ và tên'
                            onChange={handleChange}
                            error={error.branchId}
                        >
                            <option value='' disabled={true}>Chọn chi nhánh</option>
                            {branch.length > 0
                                ? branch.map(branchItem => {
                                    if (branchItem.city?.length > 0 && branchItem.city == form.city) {
                                        return branchItem.chinhanh && branchItem.chinhanh.length > 0 ? branchItem.chinhanh.map((item, index) => {
                                            return (<option key={index} value={item._id}>{item.district + " - " + item.address}</option>)
                                        }) : null;
                                    }
                                }) : null}
                        </Input>
                    </div>
                    <div className="form-group">
                        <Input
                            type='datetime-local'
                            value={format.date?.toISOString().substring(0, format.date.toISOString().length - 1)}
                            name='date'
                            placeholder='Họ và tên'
                            onChange={handleChange}
                            error={error.date}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            type='select'
                            value={form.selectedService}
                            name='selectedService'
                            onChange={handleChange}
                            error={error.selectedService}
                        >
                            <option value='' disabled={true}>Chọn dịch vụ</option>
                            {
                                service.length > 0
                                    ? service.map((item, index) => (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    )
                                    ) : null

                            }
                        </Input>
                    </div>
                    <div className="form-group">
                        <Input
                            type='textarea'
                            value={form.note}
                            name='note'
                            placeholder='Thêm ghi chú'
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <div className="buttons">
                    <button>Hệ thống chi nhánh</button>
                    <button onClick={handleSubmit}>Gửi yêu cầu</button>
                </div>
                <div className="calendar__form--close close"
                    onClick={() => setIsFormShow(false)}>
                    <AiOutlineClose />
                </div>
            </div>


        </div>
    )
}
