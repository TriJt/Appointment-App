import Rank from "../models/Rank.js";
import winston from 'winston';

const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

export const CreateRank = async (req, res) => {
    
        logger.info(req.body);
        const query = {
            $or: [
                {"rank": {$eq: req.body[0].rank}},
                {"level": {$eq: req.body[0].level}},
            ]
        }

        await Rank.find(query, async(err, result) => {
            if (err) {
                return res.json([
                    {
                        success: false,
                        message: "Lỗi server, vui lòng thử lại sau",
                        error: err.message,
                    }
                ]);
            }
            
            if (await result && await result.length > 0) {
                
                return res.json([
                    {
                        success: false,
                        message: "Vui lòng chọn tên hạng và mức đạt khác",
                    }
                ]);
            } else {
                if (req.body[0].discount < 0 || req.body[0].discount > 100) {
                    return res.json([
                        {
                            success: false,
                            message: "Vui lòng chọn mức giảm giá dưới 100%",
                        }
                    ])
                }
                if (req.body[0].bonus < 0 || req.body[0].bonus > 100) {
                    return res.json([
                        {
                            success: false,
                            message: "Vui lòng chọn mức thưởng dưới 100%",
                        }
                    ])
                }
                Rank.create(req.body, (err, post) => {
                    if (err) {
                        return res.json([
                            {
                                success: false,
                                error: err.message,
                                message: "Lỗi server, vui lòng thử lại sau",
                            }
                        ]);
                    }
                });
                return res.json([
                    {
                        success: true,
                        message: "Tạo hạng mức thành công",
                    }
                ])
            }
        }).clone();
}

export const ShowAllRanks = async(req, res) => {
    Rank.find((err, ranks) => {
        if (err) {
            return res.json([
                {
                    success: false,
                    error: err.message,
                    message: "Lỗi server, vui lòng thử lại sau",
                }
            ])
        }
        return res.json([
            {
                success: true,
                list: ranks,
            }
        ])
    }).sort({level: -1})
}