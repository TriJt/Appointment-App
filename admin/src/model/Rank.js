import APIFunction from "../services";

export const getRank = () => {
    return APIFunction.getRank().then(result => result).catch(err=>err);
}