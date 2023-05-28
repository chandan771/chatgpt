import React from 'react'
import './poss.css'
// import possibilityImage  from '../../assets/possibility.png';
import imageOne from '../../assets/pss.jpg';



const Possibility = () => {
  return (
    <div className='possibility section-padding' id='possibility'>
      <div className='poss-image'>
        {/* <img src={possibilityImage} alt='poss' /> */}
        <img src={imageOne} alt='poss' />
      </div>

       <div className='content'>
         <h4>Request Early Access to Get Started</h4>
         <h1 className='gradient__text'>The Possibilities are Beyond your Imagination</h1>
         <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
         <h4>Hurry to get Access  before it's closed</h4>
       </div>
    </div>
  )
}

export default Possibility
