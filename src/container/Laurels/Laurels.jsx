import React from 'react';
import { SubHeading } from "../../components";
import { images, data  } from "../../constants";
import './Laurels.css';

const Laurels = () =>  {
  const AwardCard = ({award :  {imgUrl, title, subtitle } }) => (    
      <div className='app__laurels_awards-card'>
          <img src={imgUrl}  alt={title} />
          <div className='app__laurels_awards-card_content'>
            <p className='p__cormorant'>{title}</p>
            <p className='p__opensans'>{subtitle}</p>
          </div>
      </div>
  )
return  (
  <div className='app__bg app__wrapper section__padding' id="awards">
      <div className='app__wrapper_info'>
          <div style={{marginBottom: '1rem'}}>
            <SubHeading title="Awards &ampl; Recognition"   />
          </div>
          <h1 class="headtext__cormorant">Our Laurels</h1>
          <div className='app__laurels_awrds'>
            {data.awards.map((award) => <AwardCard award={award} key={award.title} />  )}
          </div>
      </div>
    <div className='app__wrapper_img'>
        <img src={images.laurels} alt="Laurels" />
    </div>
  </div>
)
}
export default Laurels;
