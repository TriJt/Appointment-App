import APIFunction from "../services";

export const getBranch = () => {
    return APIFunction.getBranch().then(res=>{
        return res;
    }).catch(err=>{
        return err;
    })
}

export const insertBooking = (param) => {
    return APIFunction.insertBooking(param).then(res=>{
        return res;
    }).catch(err=>{
        return err;
    })
}