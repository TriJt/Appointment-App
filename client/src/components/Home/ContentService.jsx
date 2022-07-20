import React from 'react'

const ContentService = props => {
  return (
    <>
    <div className='boder'></div>
    <div className='contentService'>
      <div className="contentService__image">
        <img src={props.data.img1} alt="d" />
      </div>
      <div className="contentService__content">
        <div className="contentService__inner">
          <h3>{props.description}</h3>
          <p>{props.data.content}</p>
        </div>

        <div className="contentService__carousel">
        <div className="contentService__carousel--image"><img src={props.data.img2} alt="d" /></div>
        <div className="contentService__carousel--image"><img src={props.data.img3} alt="d" /></div>
        <div className="contentService__carousel--image"><img src={props.data.img4} alt="d" /></div>  


        </div>
        <div className="btnxemthem">Xem thêm</div>
      </div>
    </div>
    <div className='boder'></div>
    </>
  )
}

export default ContentService