import APIFunction from "../services";

export const getCustomer = () => {
    return APIFunction.getCustomer().then(result => result).catch(err=>err);
}

export const addCustomer = (params) => APIFunction.addCustomer(params).then(result => result).catch(err=>err);

export const deleteCustomer = (params) => APIFunction.deleteCustomer(params).then(result => result).catch(err => err);