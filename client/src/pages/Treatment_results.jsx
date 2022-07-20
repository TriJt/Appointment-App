import React from 'react'
import Helmet from '../components/Helmet'
import Section ,{SectionBody, SectionTitle}from '../components/Section'
import imgbanner from '../assets/images/kquadieutri.jpg'
import BgRealistic from '../components/Home/BgRealistic'
import treatmentsData from '../assets/fake_data/BgRealistic'


const getAlltreatments =treatmentsData.getAlltreatments
const Treatment_results = () => {

  //hiển thị dữ liệu của button của hình ảnh thực tế
  const getAllbtntreatments = treatmentsData.getAllbtntreatments
  //hiển thị dữ liệu của hình ảnh thực tế 
  const getAlltreatments =treatmentsData.getAlltreatments
  return (
    < >
      <Helmet title = "kết quả điều trị">
        <section >
          <div className='banner__image'>
            <img  src={imgbanner} alt="banner" />
          </div>
        </section>

      {/* begin kết quả điều trị treatment results */}
        <div className='container '>
        <Section >

          <SectionTitle>
            <div className='Treatment_results__title'>Kết Quả Điều Trị</div>
            <div className='Treatment_results__description'>Hơn 900.000 khách hàng đã “lên đời” nhăn sắc khi đến với SeoulSpa.Vn. Cùng xem những hình ảnh điều trị này nhé!</div>
          </SectionTitle>
          <SectionBody>
          <BgRealistic 
            button = {getAllbtntreatments}
            content = {getAlltreatments}   
            />
          </SectionBody>
          <div className='button active seemore'>xem thêm</div>
        </Section>
        </div>
      {/* end kết quả điều trị treatment results */}



      </Helmet>
    </>
  )
}

export default Treatment_results