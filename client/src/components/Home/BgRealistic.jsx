import React, { useState} from 'react'
import Grid from "../Grid"

const BgRealistic = (props) => {
    const [btn, setBtn] = useState(0)
    const numberContent = props.numberContent
    const numberBtn = props.numberBtn
    const getbtn =  (count)=>{
        return props.button.slice(0, count)
    }
    const btns =numberBtn ? getbtn(numberBtn) : props.button
   
    const a = props.button[btn].id
    const b = props.content
    const noidung =  b.filter(e=>e.idbtn ===a)   
    
    const getNoidung = (count)=>{
        return noidung.slice(0, count)
    }

    const data = props.numberContent?getNoidung(numberContent):noidung
 
  //console.log(getbtn(numberBtn)[btn].id)
 
  
  return (
    <>
        <div className="BgRealistic__btn">
        {
            btns.map((item,index)=>(
            <div key={index}>
                <button  
                    onClick={()=>{
                        setBtn(item.id)
                    }}
                    className={`button ${item.id ===btn?'active':''}`}
                >{item.name}</button>
            </div>
            ))
        }
        </div>
        <div className="BgRealistic__cards">
        <Grid
            col= {4}
            mdCol = {3}
            msCol ={2}
            gap = {20}
        >
            
        {
        data.map((item,index)=>(
            <div key={index} className="BgRealistic__card">
                <div className="BgRealistic__img">
                    <img src={item.img} alt="đây là hình ảnh" />
                </div>
                <div className="BgRealistic__content">
                    <div className="BgRealistic__button">
                        <button className='button active'>trước</button>
                        <button className='button active'>sau</button>
                    </div>
                    <div className="BgRealistic__description">
                    {
                        item.description
                    }
                        
                </div>
            </div>
        </div>
        ))
        }
        </Grid>
        
            
        </div>
        
    </>
  )
}

export default BgRealistic