import { useState } from 'react';
import { servicecontent, services } from '../../../assets/fake_data';
import MyCarousel from '../../../components/MyCarousel';

export default function Categories() {
  const [currentServiceId, setCurrentServiceId] = useState(0);
  const { slides: currentSlider } = servicecontent.find(content => content.service_id == currentServiceId);

  const handleActiveSlide = selector => e => {
    document.querySelectorAll(selector).forEach(item => item.classList.remove('active'))
    e.currentTarget.classList.add('active');
  }

  let carouselData = currentSlider.map((slide, slideIndex) => {
    return {
      key: slideIndex,
      content:
        <SlideItem isActive={slideIndex == 0}
          data={slide}
          onClick={handleActiveSlide('#service .slide')} />
    }
  })

  return (
    <div className='categories'>
      <div className="container">
        <ul className="categories__list">
          {services.map(service => (
            <li key={service.id}
              className={`categories__list--item ${currentServiceId == service.id ? 'active' : ''}`}
              onClick={() => setCurrentServiceId(service.id)} >
              <div className="img">
                {service.img}
              </div>
              <span className="description">
                {service.description}
              </span>
            </li>
          ))}

        </ul>
      </div>
      <div className="categories__slider">
        <div className="categories__slider--viewer container">
          <MyCarousel
            slides={carouselData}
            height="50%"
            width="80%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </div>
    </div>
  )
}

const SlideItem = ({ data, onClick, isActive }) => {
  return (
    <div className={`slide ${isActive ? 'active' : ''}`} onClick={onClick}>
      <h3 className='slide__title'>{data.title}</h3>
      <div className="slide__img"><img src={data.img} alt="" /></div>
      <p className='slide__description'>
        <span>{data.description}</span>
        <a href='' className="slide__btn">Xem thêm</a>
      </p>

    </div>
  )
}