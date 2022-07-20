import React from 'react'

const Search = () => {
   
  return (
    <div className='input-group'>
        <div className="container">
            <div className="input-group__search ">
                <ion-icon name="search-outline"></ion-icon>
                <input type="search" className="form-control" placeholder="Tên công việc"  />
                
            </div>
            <div className='input-group__search'>
                <input type="search" placeholder='Địa bàn làm việc'/>
            </div>
            <div className="btn-submit" >
                <h3>Tìm việc làm</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Search