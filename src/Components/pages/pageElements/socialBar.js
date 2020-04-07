import React from 'react';
import ReactDOM from 'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function SocialPic() {
  return (
    <div className="socialWrap">


      <div className="social">
      <SocialMediaIconsReact
      borderColor="rgba(0,0,0,0.25)"
      borderWidth="5" borderStyle="double"
      icon="facebook" iconColor="rgba(255,255,255,1)"
      backgroundColor="rgba(10,32,21,1)"
      iconSize="6" roundness="50%"
      url="https://www.facebook.com/idealpawnandjewelry/"
      size="39" />

      <div className="social">
      <SocialMediaIconsReact
      borderColor="rgba(0,0,0,0.25)"
      borderWidth="5" borderStyle="double"
      icon="yelp" iconColor="rgba(255,255,255,1)"
      backgroundColor="rgba(10,32,21,1)"
      iconSize="5" roundness="20%"
      url="https://www.yelp.com/biz/ideal-pawn-and-jewelry-doraville"
      size="39" />

      <div className="social">
      <SocialMediaIconsReact
      borderColor="rgba(0,0,0,0.25)"
      borderWidth="5" borderStyle="double"
      icon="instagram" iconColor="rgba(255,255,255,1)"
      backgroundColor="rgba(10,32,21,1)"
      iconSize="5" roundness="20%"
      url="https://www.instagram.com/idealpawn/"
      size="39" />


        </div>
       </div>
      </div>
    </div>




  )

}
export default SocialPic;
