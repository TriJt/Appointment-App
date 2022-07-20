import APIFunction from "../services";

export const getService = (params) => {
    return APIFunction.getNavigator(params).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}