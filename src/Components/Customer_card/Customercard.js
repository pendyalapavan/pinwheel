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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet. vulputate egestas sollicitudin . </p>
          </div>
      </div>
      <div className='ringcards'>
        <div class="container">
          <div class="avatar-flip">
            <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"/>
            <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
          </div>
          <h2>John Smith</h2>
          <h4>developer</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
          <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>

        <div class="container">
          <div class="avatar-flip">
            <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"/>
            <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
          </div>
          <h2>John Smith</h2>
          <h4>developer</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
          <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>

        
      </div>




    </div>

  )
}
