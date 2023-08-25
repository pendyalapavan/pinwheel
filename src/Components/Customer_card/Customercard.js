import React from 'react'
import './Customercard.css'
import user_6 from './user-6.png'

export default function Customercard() {
  return (
    <div className='customercard'>
      <div className="customer_card_upper">
          <div>
            <h className="h_our_custmoers">Our customers have nice things to say about us</h>
          </div>
          <div className='card_paragraph'>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin . </h4>
          </div>
      </div>

      <div className='customer_card_lower'>
            
              <div class="card">
                  <div class="card-image">
                  <img src={user_6}className="c-logo" alt="logo" />
                  </div>
                
                  <div class="card-content">
                    <div class="card-name">John Doe</div>
                    <div class="card-occupation">Web Developer</div>
                    <div class="card-description">Passionate about creating responsive web experiences using the latest technologies.</div>
                  </div>
                  <div class="card-rating">
                    <div class="rating-stars">★★★★</div>
                  </div>
              </div>

              <div class="card">
                  <div class="card-image">
                  <img src={user_6}className="c-logo" alt="logo" />
                  </div>
                
                  <div class="card-content">
                    <div class="card-name">John Doe</div>
                    <div class="card-occupation">Web Developer</div>
                    <div class="card-description">Passionate about creating responsive web experiences using the latest technologies.</div>
                  </div>
                  <div class="card-rating">
                    <div class="rating-stars">★★★★★</div>
                  </div>
              </div>

              <div class="card">
                  <div class="card-image">
                  <img src={user_6}className="c-logo" alt="logo" />
                  </div>
                
                  <div class="card-content">
                    <div class="card-name">John Doe</div>
                    <div class="card-occupation">Web Developer</div>
                    <div class="card-description">Passionate about creating responsive web experiences using the latest technologies.</div>
                  </div>
                  <div class="card-rating">
                    <div class="rating-stars">★★★★★</div>
                  </div>
                   
                   

              </div>

              <div class="card">
                  <div class="card-image">
                  <img src={user_6}className="c-logo" alt="logo" />
                  </div>
                
                  <div class="card-content">
                    <div class="card-name">John Doe</div>
                    <div class="card-occupation">Web Developer</div>
                    <div class="card-description">Passionate about creating responsive web experiences using the latest technologies.</div>
                  </div>
                  <div class="card-rating">
                    <div class="rating-stars">★★★★★</div>
                  </div>
                   
                   

              </div>

      </div>
    </div>
  )
}
