// <<<<<<< HEAD
// import Introduce from "../../pages/Introduce"
// import Recruitment from "../../pages/Recruitment"
// import Service from "../../pages/Service"

// const navigators = [
// =======
// import { getService } from '../../model/navigator.js'

// function removeVietnameseTones(str) {
//     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
//     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
//     str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
//     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
//     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
//     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
//     str = str.replace(/đ/g,"d");
//     str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
//     str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
//     str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
//     str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
//     str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
//     str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
//     str = str.replace(/Đ/g, "D");
//     str = str.replace(" ", "-");
//     // Some system encode vietnamese combining accent as individual utf-8 characters
//     // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
//     str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
//     str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
//     // Remove extra spaces
//     // Bỏ các khoảng trắng liền nhau
//     str = str.replace(/ + /g," ");
//     str = str.trim();
//     // Remove punctuations
//     // Bỏ dấu câu, kí tự đặc biệt
//     str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
//     str = str.replaceAll(" ", "-");
//     return str;
// }
// const career = {
//     display: 'Tuyển Dụng',
//     base: '/tuyen-dung'
// }

// const navigator = [
// >>>>>>> aa0ddb16ea16ef843f3834308231dab5d3e4fa25
//     {
//         display: 'Về Seoulspa.Vn',
//         base: '/Gioi-Thieu',
//         content: <Introduce />
//     },
// <<<<<<< HEAD
//     {
//         display: 'Điều Trị Da',
//         base: '/dich-vu',
//         groups: [
//             {
//                 display: 'Điều Trị Da',
//                 groups: [
//                     [
//                         {
//                             display: 'Điều Trị Mụn',
//                             path: 'Dieu-Tri-Mun'
//                         },
//                         {
//                             display: 'Trị Mụn E2x',
//                             path: 'Tri-Mun-E2x'
//                         },
//                         {
//                             display: 'Trị Mụn Chuyên Sâu',
//                             path: 'Tri-Mun-Chuyen-Sau'
//                         },
//                         {
//                             display: 'Trị Mụn Y Khoa',
//                             path: 'Tri-Mun-Y-Khoa'
//                         },
//                         {
//                             display: 'Điều Trị Mụn Lưng',
//                             path: 'Dieu-Tri-Mun-Lung'
//                         },
//                         {
//                             display: 'Điều Trị Da Mụn',
//                             path: 'Dieu-Tri-Da-Mun'
//                         },
//                         {
//                             display: 'Điều Trị Thâm Mụn',
//                             path: 'Dieu-Tri-Tham-Mun-Kep'
//                         },
//                         {
//                             display: 'Trị Mụn Huyết Thanh Tảo Biển',
//                             path: 'Tri-Mun-Huyet-Thanh-Tao-Bien'
//                         }
//                     ],
//                     [
//                         {
//                             display: 'Điều Trị Nám',
//                             path: 'Dieu-Tri-Nam',
//                         },
//                         {
//                             display: 'Điều Trị Nám Da E-Light',
//                             path: 'Dieu-Tri-Nam-Da-E-Light'
//                         },
//                         {
//                             display: 'Điều Trị Nám Prp 3.0',
//                             path: 'Dieu-Tri-Nam-Prp-3-0'
//                         },
//                         {
//                             display: 'Điều Trị Nám Da Mặt',
//                             path: 'Dieu-Tri-Nam-Da'
//                         }
//                     ],
//                     [
//                         {
//                             display: 'Điều Trị Sẹo Rỗ',
//                             path: 'Dieu-Tri-Seo-Ro'
//                         },
//                         {
//                             display: 'Điều Trị Sẹo Rỗ Prp 3.0',
//                             path: 'Dieu-Tri-Seo-Ro-Prp-3-0'
//                         },
//                         {
//                             display: 'Điều Trị Sẹo Rỗ Prp 4.0',
//                             path: 'Dieu-Tri-Seo-Ro-Prp-4-0'
//                         },
//                         {
//                             display: 'Trị Sẹo Rỗ',
//                             path: 'Tri-Seo-Ro'
//                         },
//                     ],
//                     [
//                         {
//                             display: 'Điều Trị Thâm',
//                             path: 'Dieu-Tri-Tham'
//                         },
//                         {
//                             display: 'Điều Trị Thâm Mụn',
//                             path: 'Dieu-Tri-Tham-Mun-Kep'
//                         },
//                         {
//                             display: 'Trị Thâm Vi Kim Tảo Biển',
//                             path: 'Tri-Tham-Vi-Kim-Tao-Bien'
//                         },
//                         {
//                             display: 'Trị Thâm Elight',
//                             path: 'Tri-Tham-Elight'
//                         },
//                         {
//                             display: 'Trị Thâm Vitamin C Kép',
//                             path: 'Tri-Tham-Vitamin-C-Kep'
//                         },
//                     ],

//                 ]
//             },
//             {
//                 display: 'Chăm Sóc Da',
//                 children: [
//                     {
//                         display: 'Cấy Dna Cá Hồi',
//                         path: 'Cay-Dna-Ca-Hoi'
//                     },
//                     {
//                         display: 'Hút Chì Thải Độc',
//                         path: 'Hut-Chi-Thai-Doc'
//                     },
//                     {
//                         display: 'Cấy Glutathione',
//                         path: 'Cay-Glutathione'
//                     },
//                     {
//                         display: 'Cấy Hồng Sâm',
//                         path: 'Cay-Hong-Sam'
//                     },
//                     {
//                         display: 'Cấy Tảo Xoắn Spirulina',
//                         path: 'Cay-Tao-Xoan-Spirulina'
//                     },
//                     {
//                         display: 'Ủ Mầm Tái Sinh Da',
//                         path: 'U-Mam-Tai-Sinh-Da'
//                     },
//                     {
//                         display: 'Ủ Trắng Face Huyết Yến',
//                         path: 'U-Trang-Face-Huyet-Yen'
//                     },
//                     {
//                         display: 'Liệu Trình Carboxyl Thải Độc Da',
//                         path: 'Lieu-Trinh-Carboxyl-Thai-Doc-Da'
//                     },
//                     {
//                         display: 'Tắm Trắng Phi Thuyền',
//                         path: 'Tam-Trang'
//                     },
//                     {
//                         display: 'Triệt Lông Elight',
//                         path: 'Triet-Long'
//                     },
//                 ]
//             },
//             {
//                 display: 'Phun Xăm',
//                 children: [
//                     {
//                         display: 'Phun Chân Mày',
//                         path: 'Phun-May'
//                     },
//                     {
//                         display: 'Dịch Vụ Phun Môi',
//                         path: 'Phun-Moi'
//                     },
//                     {
//                         display: 'Xóa Xăm Môi',
//                         path: 'Xoa-Xam-Moi'
//                     },
//                     {
//                         display: 'Xóa Xăm Lông Mày',
//                         path: 'Xoa-Xam-Long-May'
//                     },
//                     {
//                         display: 'Điêu Khắc Chân Mày',
//                         path: 'Dieu-Khac-Chan-May'
//                     },
//                 ]
//             },
//             {
//                 display: 'Thẩm Mỹ',
//                 children: [
//                     {
//                         display: 'Căng Chỉ Collagen',
//                         path: 'Cang-Chi-Collagen'
//                     },
//                     {
//                         display: 'Cấy Collagen Đa Nguyên Bào',
//                         path: 'Cay-Collagen-Da-Nguyen-Bao'
//                     },
//                     {
//                         display: 'Cấy Hủy Mỡ Nọng Cằm',
//                         path: 'Cay-Huy-Mo-Nong-Cam'
//                     },
//                     {
//                         display: 'Tạo Hình Vùng Kín',
//                         path: 'Tao-Hinh-Vung-Kin'
//                     },
//                     {
//                         display: 'Tiêm Filler',
//                         path: 'Tiem-Filler'
//                     },
//                     {
//                         display: 'Tiêm Filler Cằm',
//                         path: 'Tiem-Filler-Cam'
//                     },
//                     {
//                         display: 'Tiêm Filler Môi',
//                         path: 'Tiem-Filler-Moi'
//                     },
//                     {
//                         display: 'Tiêm Filler Mũi',
//                         path: 'Tiem-Filler-Mui'
//                     },
//                     {
//                         display: 'Tiêm Filler Rãnh Cười',
//                         path: 'Tiem-Filler-Ranh-Cuoi'
//                     },
//                     {
//                         display: 'Tiêm Filler Thái Dương',
//                         path: 'Tiem-Filler-Thai-Duong'
//                     },
//                     {
//                         display: 'Tiêm Botox Xóa Nhăn',
//                         path: 'Tiem-Botox'
//                     },
//                     {
//                         display: 'Trẻ Hóa Da Thermage',
//                         path: 'Tre-Hoa-Da-Bang-Cong-Nghe-Thermage'
//                     },
//                 ]
//             },
//         ],
//         content: <Service />
//     },
    
//     {
//         display: 'Tuyển Dụng',
//         base: '/Tuyen-Dung',
//         content: <Recruitment />
//     }
// ]

// export default navigators
// =======
// ]

// getService().then((res) => {
//     if (res.list && res.list.length > 0) res.list.map(item => {
//         //console.log(res.list);
//         const newNav = {};
//         newNav.display = item.name;
//         newNav.base = "/" + removeVietnameseTones(item.name);
//         navigator.push(newNav);
//     });
//     navigator.push(career)
// })




// // const navigator = [
// //     {
// //         display: 'Về SeoulSpa.vn',
// //         base: '/gioi-thieu'
// //     },
// //     {
// //         display: 'Điều Trị Da',
// //         base: '/dich-vu',
// //         groups: [
// //             [
// //                 {
// //                     display: 'Điều Trị Mụn',
// //                     path: 'dieu-tri-mun'
// //                 },
// //                 {
// //                     display: 'Trị Mụn E2X',
// //                     path: 'tri-mun-e2x'
// //                 },
// //                 {
// //                     display: 'Trị Mụn Chuyên Sâu',
// //                     path: 'tri-mun-chuyen-sau'
// //                 },
// //                 {
// //                     display: 'Trị Mụn Y Khoa',
// //                     path: 'tri-mun-y-khoa'
// //                 },
// //                 {
// //                     display: 'Điều Trị Mụn Lưng',
// //                     path: 'dieu-tri-mun-lung'
// //                 },
// //                 {
// //                     display: 'Điều trị da mụn',
// //                     path: 'dieu-tri-da-mun'
// //                 },
// //                 {
// //                     display: 'Điều Trị Thâm Mụn',
// //                     path: 'dieu-tri-tham-mun-kep'
// //                 },
// //                 {
// //                     display: 'Trị Mụn Huyết Thanh Tảo Biển',
// //                     path: 'tri-mun-huyet-thanh-tao-bien'
// //                 }
// //             ],
// //             [
// //                 {
// //                     display: 'Điều Trị Nám',
// //                     path: 'dieu-tri-nam',
// //                 },
// //                 {
// //                     display: 'Điều Trị Nám Da E-light',
// //                     path: 'dieu-tri-nam-da-e-light'
// //                 },
// //                 {
// //                     display: 'Điều Trị Nám Prp 3.0',
// //                     path: 'dieu-tri-nam-prp-3-0'
// //                 },
// //                 {
// //                     display: 'Điều Trị Nám Da Mặt',
// //                     path: 'dieu-tri-nam-da'
// //                 }
// //             ],
// //             [
// //                 {
// //                     display: 'Điều Trị Sẹo Rỗ',
// //                     path: 'dieu-tri-seo-ro'
// //                 },
// //                 {
// //                     display: 'Điều Trị Sẹo Rỗ PRP 3.0',
// //                     path: 'dieu-tri-seo-ro-prp-3-0'
// //                 },
// //                 {
// //                     display: 'Điều Trị Sẹo Rỗ PRP 4.0',
// //                     path: 'dieu-tri-seo-ro-prp-4-0'
// //                 },
// //                 {
// //                     display: 'Trị Sẹo Rỗ',
// //                     path: 'tri-seo-ro'
// //                 },
// //             ],
// //             [
// //                 {
// //                     display: 'Điều Trị Thâm',
// //                     path: 'dieu-tri-tham'
// //                 },
// //                 {
// //                     display: 'Điều Trị Thâm Mụn',
// //                     path: 'dieu-tri-tham-mun-kep'
// //                 },
// //                 {
// //                     display: 'Trị Thâm Vi Kim Tảo Biển',
// //                     path: 'tri-tham-vi-kim-tao-bien'
// //                 },
// //                 {
// //                     display: 'Trị Thâm Elight',
// //                     path: 'tri-tham-elight'
// //                 },
// //                 {
// //                     display: 'Trị Thâm Vitamin C Kép',
// //                     path: 'tri-tham-vitamin-c-kep'
// //                 },
// //             ],

// //         ]
// //     },
// //     {
// //         display: 'Chăm Sóc Da',
// //         base: '/dich-vu',
// //         children: [
// //             {
// //                 display: 'Cấy DNA Cá Hồi',
// //                 path: 'cay-dna-ca-hoi'
// //             },
// //             {
// //                 display: 'Hút Chì Thải Độc',
// //                 path: 'hut-chi-thai-doc'
// //             },
// //             {
// //                 display: 'Cấy Glutathione',
// //                 path: 'cay-glutathione'
// //             },
// //             {
// //                 display: 'Cấy Hồng Sâm',
// //                 path: 'cay-hong-sam'
// //             },
// //             {
// //                 display: 'Cấy Tảo Xoắn Spirulina',
// //                 path: 'cay-tao-xoan-spirulina'
// //             },
// //             {
// //                 display: 'Ủ Mầm Tái Sinh Da',
// //                 path: 'u-mam-tai-sinh-da'
// //             },
// //             {
// //                 display: 'Ủ Trắng Face Huyết Yến',
// //                 path: 'u-trang-face-huyet-yen'
// //             },
// //             {
// //                 display: 'Liệu Trình Carboxyl Thải Độc Da',
// //                 path: 'lieu-trinh-carboxyl-thai-doc-da'
// //             },
// //             {
// //                 display: 'Tắm trắng phi thuyền',
// //                 path: 'tam-trang'
// //             },
// //             {
// //                 display: 'Triệt Lông Elight',
// //                 path: 'triet-long'
// //             },
// //         ]
// //     },
// //     {
// //         display: 'Phun Xăm',
// //         base: '/dich-vu',
// //         children: [
// //             {
// //                 display: 'Phun chân mày',
// //                 path: 'phun-may'
// //             },
// //             {
// //                 display: 'Dịch Vụ Phun Môi',
// //                 path: 'phun-moi'
// //             },
// //             {
// //                 display: 'Xóa Xăm Môi',
// //                 path: 'xoa-xam-moi'
// //             },
// //             {
// //                 display: 'Xóa xăm lông mày',
// //                 path: 'xoa-xam-long-may'
// //             },
// //             {
// //                 display: 'Điêu khắc chân mày',
// //                 path: 'dieu-khac-chan-may'
// //             },
// //         ]
// //     },
// //     {
// //         display: 'Thẩm Mỹ',
// //         base: '/dich-vu',
// //         children: [
// //             {
// //                 display: 'Căng Chỉ Collagen',
// //                 path: 'cang-chi-collagen'
// //             },
// //             {
// //                 display: 'Cấy Collagen Đa Nguyên Bào',
// //                 path: 'cay-collagen-da-nguyen-bao'
// //             },
// //             {
// //                 display: 'Cấy Hủy Mỡ Nọng Cằm',
// //                 path: 'cay-huy-mo-nong-cam'
// //             },
// //             {
// //                 display: 'Tạo hình vùng kín',
// //                 path: 'tao-hinh-vung-kin'
// //             },
// //             {
// //                 display: 'Tiêm Filler',
// //                 path: 'tiem-filler'
// //             },
// //             {
// //                 display: 'Tiêm Filler Cằm',
// //                 path: 'tiem-filler-cam'
// //             },
// //             {
// //                 display: 'Tiêm Filler Môi',
// //                 path: 'tiem-filler-moi'
// //             },
// //             {
// //                 display: 'Tiêm Filler Mũi',
// //                 path: 'tiem-filler-mui'
// //             },
// //             {
// //                 display: 'Tiêm Filler rãnh cười',
// //                 path: 'tiem-filler-ranh-cuoi'
// //             },
// //             {
// //                 display: 'Tiêm Filler thái dương',
// //                 path: 'tiem-filler-thai-duong'
// //             },
// //             {
// //                 display: 'Tiêm Botox xóa nhăn',
// //                 path: 'tiem-botox'
// //             },
// //             {
// //                 display: 'Trẻ hóa da Thermage',
// //                 path: 'tre-hoa-da-bang-cong-nghe-thermage'
// //             },
// //         ]
// //     },
// //     {
// //         display: 'Tuyển Dụng',
// //         base: '/tuyen-dung'
// //     }
// // ]



// export default navigator
// >>>>>>> aa0ddb16ea16ef843f3834308231dab5d3e4fa25
