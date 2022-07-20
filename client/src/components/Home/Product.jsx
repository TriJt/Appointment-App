import React from 'react'
const Product = (props) => {
  return (
    <>
      <div >
        <div className="Product__card">
          <div className= "Product__card--image">
            <div className="Product__card--discount">-20%</div>
            <img src={props.data.img} alt="Product" />
          </div>
          <div className="Product__card--content">
            <div className="Product__card--name">{props.data.category}</div>
            <div className="Product__card--describe">{props.data.name}</div>
            <div className="Product__card--price">
              <p className='km'>{props.data.price}₫</p>
              <p className='k'>1.750.000₫</p>
            </div>
            <div className="Product__card--shopping">
              <ion-icon name="cart-outline"></ion-icon>
              <button className='active'>thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Product