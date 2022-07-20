import React from 'react'

export default function Helmet({ children, title }) {
    document.title = 'Seoulspa - ' +  title;
    const style = {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '2.4rem'
    }
    return (
        <div className='helmet'>
            <div className="helmet__container"
            style={style}>
                {children}
            </div>
            
        </div>
    )
}
