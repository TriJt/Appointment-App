import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineMenu,AiOutlineArrowRight} from 'react-icons/ai'
import List from './List'

const Serviceis = props => {
  const [hidden, setHidden] = useState(false)
  const active = useRef();
  const handleHident =()=>{
    setHidden(!hidden)
    active.current.classList.toggle('active')
  }
 
  return (
    <div className="portfolio-page">
      <section className='portfolio-top container'>
        <Link to ="">
          Home
        </Link>
        <div className='line-s'>/</div>
        <Link to ="">
          Điều trị mụn
        </Link>
      </section>

      <div className='boder'></div>

      <section className='service__content container'>
        <div className="service__content--left">
          <div className='title'>Điều trị da mụn</div>
          <button className='button'>Yêu cầu tư vấn</button>
          <div className="service__content--postcontent">
          <p>Mụn chính là nỗi ám ảnh lớn của nhiều người, bởi nó gây nên những tổn thương và dấu hiệu xấu xí trên da mặt. Nếu bạn đang gặp phải tình trạng mụn nhưng không biết cách điều trị mụn hiệu quả. Hãy cùng tìm hiểu liệu trình điều trị mụn tận gốc tại spa trị mụn <span>Seoul Spa</span>, bạn sẽ thấy ngay hiệu quả rõ rệt chỉ sau một lần điều trị.</p>
          </div>
          <div className="service__content--outer">
            <div className="sco-header " ref={active} onClick={handleHident}>
              <div className="sco-header--title">
                  <AiOutlineMenu />
                  <h2>Nội dung chính</h2>
              </div> 
              <div className="sco-header--arr ">
                <div className='icon-arr'><AiOutlineArrowRight /></div>
              </div>
            </div>
            <div className="sco-list">
              {
                hidden && <List />
              }
            </div>
          </div>
        </div>
        <div className="service__content--right">
          
        </div>
        
      </section>
    </div>
  )
}

Serviceis.propTypes = {}

export default Serviceis