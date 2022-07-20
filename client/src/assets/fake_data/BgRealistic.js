import img1 from "../images/tamtrang.jpg"
import img2 from "../images/tamtrang1.jpg"
import img3 from "../images/tamtrang2.jpg"
import img4 from "../images/tamtrang3.jpg"


const btntreatments = [
    {
        id:0,
        name: "Tắm trắng",
        path: "tab12"

    },
    {
        id:1,
        name: "triệt lông",
        path: "tab13"

    },
    {
        id:2,
        name: "Điều trị thâm",
        path: "tab14"

    },
    {
        id:3,
        name: "Điều trị nám",
        path: "tab16"
    },
    {
        id:4,
        name: "điều trị 5",
        path: "tab17"
    }

]

const treatments = [
    {
        id: 0,
        idbtn :0,
        img:img1,
        description:'Tắm trắng Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 1,
        idbtn :0,
        img:img2,
        description:'Tắm trắng 1Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...'

    },
    {
        id: 2,
        idbtn :0,
        img:img2,
        description:' Tắm trắng2Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...'

    },
    {
        id: 3,
        idbtn :0,
        img:img3,
        description:' Tắm trắng 3Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...'

    },
    {
        id: 2,
        idbtn :0,
        img:img2,
        description:' Tắm trắng2Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...'

    },
    {
        id: 3,
        idbtn :0,
        img:img3,
        description:' Tắm trắng 3Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...'

    },
    {
        id: 4,
        idbtn :0,
        img:img3,
        description:'Tắm trắng Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 5,
        idbtn :0,
        img:img4,
        description:' Tắm trắngChị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :1,
        img:img3,
        description:'triệt lông Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :1,
        img:img4,
        description:'triệt lông Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :1,
        img:img3,
        description:'triệt lông Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 4,
        idbtn :1,
        img:img3,
        description:'triệt lông Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :1,
        img:img4,
        description:'triệt lông Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
    {
        id: 0,
        idbtn :2 ,
        img:img3,
        description:'điều trị thâm Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    }, 
    {
        id: 0,
        idbtn :2 ,
        img:img3,
        description:'2điều trị thâm Chị Trâm (34 tuổi) da sạm không đều màu sau khi sử dụng liệu trình tắm trắng Omega giúp da trắn sáng đều màu...                '

    },
]

const   getAllbtntreatments = btntreatments
const   getAlltreatments = treatments

const getbtntreatment = (count)=>{
    const max = btntreatments.length - count;
    const min = 0;
    const start =  Math.floor(Math.random() * (max -min ) + min)
    return btntreatments.slice(start, start + count)
}

const gettreatment = (count)=>{
    const max = treatments.length - count;
    const min = 0;
    const start =  Math.floor(Math.random() * (max -min ) + min)
    return treatments.slice(start, start + count)
}

const treatmentsData ={
    getAllbtntreatments,
    getbtntreatment,
    getAlltreatments,
    gettreatment
}

export default treatmentsData