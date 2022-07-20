import { useState } from "react"

const regex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    zip: /^\d{5}(?:[-\s]\d{4})?$/
}
const useForm = (initValue) => {
    let [form, setForm] = useState(initValue);
    let [error, setError] = useState({});

    const onChange = (name, option) => (e) => {
        var value;
        if (option.mustNumber && (e.nativeEvent.data < '0' || e.nativeEvent.data > '9')) return; // bắt buộc là số

        if (option.isCheckbox) value = e.currentTarget.checked ? 'true' : '' // là checkbox
        else value = e.currentTarget.value

        setForm({
            ...form,
            [name]: option.mustNumber ? Number(value) : value
        })
    }
    const validate = (noRequiredList = []) => { // truyền vào mảng các field không bắt buộc phải nhập
        let ob = {};
        Object.keys(form).map(name => {
            if (!noRequiredList.includes(name)) {
                if (!form[name].toString().trim()) ob[name] = 'không được để trống'
                else if (regex[name] && !regex[name].test(form[name])) ob[name] = 'Sai định dạng'
            }
        })
        setError(ob);
        return ob;
    }
    const handleSubmit = (callback, noRequiredList = []) => {
        let ob = validate(noRequiredList);
        if (Object.keys(ob).length == 0) {
            if(typeof callback === 'function') callback()
        }

    }
    const register = (name, option = { mustNumber: false, isCheckbox: false, required: true }) => {
        return {
            name,
            value: form[name],
            onChange: onChange(name, option)
        }
    }
    return {
        form,
        setForm,
        error,
        onChange,
        handleSubmit,
        register,
        validate
    }
}

export default useForm