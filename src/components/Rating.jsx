import React from 'react'
import Card from "../components/Card"

import "./Rating.css"
import starImg from "../media/icon-star.svg"
import { useState } from 'react'

function Rating({rating, setRating, setShowThankYouPage}) {
  const [activeRatings, setActiveRatings] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: true,
    fiveStar: false,
  })

  const handleClick = () => {
    if (!Rating) {
      return true
    }
    setShowThankYouPage(true)

  }
  return (
    <>
      <Card>
        <div className="star_img_container">
            <img src={starImg} alt="iconImg" />
        </div>
        <div className='card-body'>
            <h2 className='title'>How did we do?</h2>
            <p className='text'>
                lease let us know how we did with your support request. All feedback
                is appreciated to help us improve our offering!
            </p>
            <div className="rating">
                <div className={activeRatings.oneStar ? "rating_container active" : "rating_container"} onClick={()=>{setActiveRatings({
                  oneStar: true,
                  twoStar: false,
                  threeStar: false,
                  fourStar: false,
                  fiveStar: false,
                });
                setRating(1);
                
                }}>1
                </div>
                <div className={activeRatings.twoStar ? "rating_container active" : "rating_container"} onClick={()=>{
                  setActiveRatings({
                    oneStar: false,
                    twoStar: true,
                    threeStar: false,
                    fourStar: false,
                    fiveStar: false,
                  });
                setRating(2);

                }}>2</div>
                <div className={activeRatings.threeStar ? "rating_container active" : "rating_container"} onClick={()=>{
                  setActiveRatings({
                    oneStar: false,
                    twoStar: false,
                    threeStar: true,
                    fourStar: false,
                    fiveStar: false,
                  });
                setRating(3);

                }}>3</div>
                <div className={activeRatings.fourStar ? "rating_container active" : "rating_container"} onClick={()=>{
                  setActiveRatings({
                    oneStar: false,
                    twoStar: false,
                    threeStar: false,
                    fourStar: true,
                    fiveStar: false,
                  })
                setRating(4);

                }}>4</div>
                <div className={activeRatings.fiveStar ? "rating_container active" : "rating_container"} onClick={()=>{
                  setActiveRatings({
                    oneStar: false,
                    twoStar: false,
                    threeStar: false,
                    fourStar: false,
                    fiveStar: true,
                  })
                setRating(5);

                }}>5</div>
            </div>
            <button className="submit-btn" onClick={handleClick}>Submit</button>
        </div>
        
      </Card>
    </>
  )
}

export default Rating
