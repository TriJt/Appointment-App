import APIFunction from "../services";

export const getService = () => {
    return APIFunction.getService().then(result => result).catch(err=>err);
}

export const deleteService = (params) => {
    return APIFunction.deleteService(params).then(result => result).catch(err=>err);
}

export const createService = (params) => {
    return APIFunction.createService(params).then(result => result).catch(err => err);
}

export const addSmallService = (params) => {
    return APIFunction.addSmallService(params).then(result => result).catch(err => err);
}

export const deleteSmallService = (params) => {
    return APIFunction.deleteSmallService(params).then(result => result).catch(err => err);
}