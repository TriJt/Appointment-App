import APIFunction from "../services";

export const getSmallService = (params) => {
    return APIFunction.getSmallService(params).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}