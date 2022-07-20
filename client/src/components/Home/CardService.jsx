import React from 'react'
import PropTypes from 'prop-types'

const CardService = props => {
  return (
    < >
      <div className="Service__card__item--image">
        <img className='svghover' src={props.img} alt="Alternative text" />
      </div>
      <div className="Service__card__item--contend">
        {props.description}
      </div>

    </>
    
  )
}

CardService.propTypes = {
  img :PropTypes.string,
  description: PropTypes.string,
}

export default CardService