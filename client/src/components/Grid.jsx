import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {
    const Style = {
        gap: props.gap ? `${props.gap}px` : '0' 
    }
    const col = props.col ? `grid-col-${props.col}`: ''
    const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : ''
    const msCol = props.msCol ? `grid-col-sm-${props.msCol}` : ''
  return (
    <div className={`grid ${col} ${mdCol} ${msCol}` } style = {Style}>
        {props.children}
    </div>
  )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    msCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid