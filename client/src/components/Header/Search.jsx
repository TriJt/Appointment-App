import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Search({ hideForMobile = true }) {
    return (
        <div className={`search ${hideForMobile && 'hide-for-mobile'}`}>
            <input type="text" placeholder="Nhập thông tin tìm kiếm" />
            <span>
                <BiSearch />
            </span>
        </div>
    )
}
