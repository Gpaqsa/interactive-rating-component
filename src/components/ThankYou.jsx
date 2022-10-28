import React from 'react'
import Card from './Card.jsx'
import thankYouImg from '../media/illustration-thank-you.svg'
import './ThankYou.css'
import './Rating.css'
const ThankYou = () => {
  return (
    <Card>
        <div className="thank_you_img_container">
            <img src={thankYouImg} alt="iconImg" />
        </div>
        <div className="selected">
            <p>You selected 5 out of 5 !</p>
        </div>
        <div className='card-body'>
            <h2 className='title'>Thank you!</h2>
            <p className='text'>
                 We appreciate you taking the time to give a rating. If you ever need more support, do not hesitate to get in touch!
            </p>
        </div>
    </Card>
  )
}

export default ThankYou
