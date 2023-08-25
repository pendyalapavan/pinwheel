import React from 'react'
import './Mainbody.css'
import banner from './banner-img.png'

export default function Mainbody() {
  return (
    <div>
        <div className='main_card_inner_div'>
            <div className='main_left_card'>
             <h>Scale design & dev operations with Avocode Enterprise </h>
             <p className='main_card_para'>Lorem ipsum dolor sit amet,consectetur adipiscing elit. <br></br>
                 Morbi egestas Werat viverra id et aliquet.<br></br>
                  vulputate egestas sollicitudin . </p>
             <div>
             <button type='submit' className='main_button'>Download theme</button>
             </div>
            </div>
            <div className='main_right_card'>
               <img src={banner}className="main-img" alt="logo" />
            </div>
        </div>


       

    </div>
  )
}
