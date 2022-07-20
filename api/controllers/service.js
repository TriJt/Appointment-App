import Services from "../models/Service.js";


/*
    Get all service
    GET api/service/
*/
export const GetServices = async (req, res, next) => {
    Services.find((err, result) => {
        if (err) return next(err)
        res.json(result)
    })
}

export const addSmallService = async (req, res, next) => {
    //return res.json(req.body.name);
    const smallService = {}
    if (!req.body.name || req.body.name == "") {
        return res.json([
            {
                success: false,
                message: "Vui lòng nhập tên dịch vụ con"
            }
        ])
    } else if (!req.body.content || req.body.content == "") {
        return res.json([
            {
                success: false,
                message: "Vui lòng nhập nội dung dịch vụ",
            }
        ])
    } else if (!req.body.serviceId || req.body.serviceId == "") {
        return res.json([
            {
                success: false,
                message: "Vui lòng chọn dịch vụ"
            }
        ])
    } else {
        const smallService = {};
        smallService.name = req.body.name;
        smallService.description = req.body.description;
        smallService.content = req.body.content;

        Services.findByIdAndUpdate(req.body.serviceId, {
            $push: {
                smallservice: smallService,
            }
        }, (err, result) => {
            if (err) return res.json([
                {
                    success: false,
                    message: "Lỗi server, vui lòng thử lại sau!"
                }
            ])
            return res.json({
                success: true,
                message: "Đã thêm thành công"
            })
        })
    }
}

export const deleteSmallService = async (req, res, next) => {
    //return res.json(req.body)
    if (!req.body.serviceId || req.body.serviceId == "") {
        return res.json({
            success: false,
            message: "Vui lòng chọn dịch vụ"
        })
    } else if (!req.body.smallserviceId || req.body.smallserviceId == "") {
        return res.json({
            success: false,
            message: "Vui lòng chọn dịch vụ con cần xóa"
        })
    } else {
        const query = {
            _id: req.body.serviceId,
        }
        Services.updateOne(query, {
            $pull: {
                smallservice: {
                    _id: req.body.smallserviceId
                }
            }
        }, (err, result) => {
            if (err) {
                return res.json({
                    success: false,
                    error: err.message,
                    message: "Lỗi server, vui lòng thử lại sau",
                })
            }
            return res.json({
                success: true,
                message: "Xóa dịch vụ con thành công"
            })
        })
    }
    
}
/*
    Get one service with id service
    GET api/service/:serviceId
*/

export const GetServicesById = async (req, res, next) => {
    Services.findById(req.params.serviceId, (err, result) => {
        if (err) return next(err)
        res.json(result);
    })
}

/*
Post  a service to database
POST api/service
*/

export const CreatService = async (req, res, next) => {
    if (!req.body.name || req.body.name == "") {
        return res.json({
            success: false,
            message: "Vui lòng nhập tên dịch vụ",
        })
    } else if (!req.body.content || req.body.content == "") {
        return res.json({
            success: false,
            message: "Vui lòng nhập nội dung dịch vụ"
        })
    }
    Services.create(req.body, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
}



/* 
Put a service in database
PUT api/service
*/

export const UpdateService = async (req, res, next) => {
    Services.findByIdAndUpdate(req.params.serviceId, req.body, (err, post) => {
        if (err) return next(err)
        res.json(post)
    })
}

/*
Delete service in database when the spa don't service again
DELETE api/service/:serviceId  
*/

export const DeleteServiceById = async (req, res, next) => {
    if (!req.body.serviceId || req.body.serviceId == "") return res.json({
        success: false,
        message: "Vui lòng cung cấp dịch vụ ID"
    })
    Services.findByIdAndDelete(req.body.serviceId, req.body, (err, post) => {
        if (err) return res.json({
            success: false,
            error: err.message,
            message: "Lỗi server, vui lòng thử lại sau",
        })
        res.json({
            success: true,
            message: "Xoá dịch vụ thành công"
        })
    })
}