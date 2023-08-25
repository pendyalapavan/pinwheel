import React from 'react'
import './Knowuscard.css'
import intro from './intro-thumbnail.png'
import collab from './collaboration.png'
import sells from './sells-by-country.png'

export default function Knowuscard() {
  return (
 <div className='know_body'>

        <div className='sells_card_inner_div'>
          <div className='sells_right_card'>
             <h className="sells_right_head">Prevent failure impacting your</h>
             <p className='sells_right_para'>Donec sollicitudin molestie malesda. 
             Donec sollitudin molestie malesuada. Mauris pellentesque nec</p>
             <p><a>★</a>Supporting more</p>
             <p> <a>★</a>Open transaction with more</p>
             <p className='sells_card_highlight'> <a>★</a>Customer Service</p>
           </div>
            <div className='sells_left_card'>
               <img src={sells}className="sells-img" alt="logo" />
            </div>
        </div>



        <div className='collab_card_inner_div'>
            <div className='collab_left_card'>
               <img src={collab}className="collab-img" alt="logo" />
            </div>
            <div className='collab_right_card'>
             <h className="collab_right_head">Accept payments any country in this whole universe </h>
             <p className='collab_right_para'>Donec sollicitudin molestie malesda. 
             Donec sollitudin molestie malesuada. Mauris pellentesque nec, 
             egestas non nisi. Cras ultricies ligula sed  </p>
             <p><a>★</a>Supporting more than 119 country world </p>
             <p> <a>★</a>Open transaction with more than currencies </p>
             <p> <a>★</a>Customer Service with 79 languages </p>
            

            
             
            </div>
            
        </div>

        <div className='know_card_inner_div'>
            <div className='know_left_card'>
             <h>Accountability that works for you</h>
             <p className='know_card_para'>Lorem ipsum dolor sit amet,consectetur adipiscing elit. <br></br>
                 Morbi egestas Werat viverra id et aliquet.<br></br>
                  vulputate egestas sollicitudin . </p>
             <div>
             <button type='submit' className='k_button'>know about us</button>
             </div>
            </div>
            <div className='know_right_card'>
               <img src={intro}className="intro-img" alt="logo" />
            </div>
        </div>
        
       
  </div>
  )
}
