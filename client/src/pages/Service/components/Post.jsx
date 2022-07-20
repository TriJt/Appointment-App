import React, { useEffect, useRef } from 'react'
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineMenuFold } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io';
import Comments from '../../../components/Comments';
import { useState } from 'react';
import Relative from './Relative';

export default function Post({ title, description , children }) {
  const [menu, setMenu] = useState([]);
  const [isMenuShow, setIsMenuShow] = useState(true);
  const relativeRef = useRef(null)


  useEffect(() => {
    let titles = document.querySelectorAll("[id*=title]");
    setMenu(Array.from(titles))
  }, [children])

  // useEffect(() => {
  //   let element = relativeRef.current
  //   let rect = element.getBoundingClientRect();
  //   var lastScroll, isDown;
  //   window.addEventListener('scroll', () => {
  //     let currentScroll = window.scrollY
  //     if (currentScroll > lastScroll) isDown = true
  //     else isDown = false
  //     lastScroll = window.scrollY

  //     if(currentScroll > rect.y)
  //     // console.log(window.scrollY, rect.y)
  //     // if(window.scrollY >= rect.y) {
  //     //   element.classList.add('sticky-top')
  //     //   element.style.left = rect.x + 'px';
  //     // }
  //   })


  //   return () => {
  //     window.removeEventListener('scroll', null)
  //   }
  // })

  return (
    <div className='post'>
      <div className="container">
        <div className="post__content">
          <div className="post__content--title">
            <h1>{title}</h1>
            <button>
              <FaRegCommentDots />
              <span>Yêu cầu tư vấn</span>
            </button>
            <div>
              {description && <p className='detail'>{description}</p>}
            </div>
          </div>
          <div className={`post__content--menu ${isMenuShow ? 'active' : ''}`}>
            <div className="bar">
              <AiOutlineMenuFold />
              <span>Nội dung</span>
              <IoIosArrowDown onClick={() => setIsMenuShow(!isMenuShow)} />
            </div>
            <div className="list">
              {menu.map((title, titleId) => {
                return (
                  <li key={titleId}
                    className={title.tagName == 'H2' ? 'lv1' : 'lv2'}
                  ><a href={'#' + title.id}>{title.innerText}</a></li>
                )
              })}
            </div>
          </div>
          <div className="post__content--detail">
            {children}
          </div>
          <Comments
            className="comments"
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />
        </div>
        <div className="post__relative" ref={relativeRef}>
          <Relative />
          <Relative />
        </div>
      </div>
    </div>
  )
}
