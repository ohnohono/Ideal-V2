import React, { Component } from 'react';
import { buildUrl } from 'instafeed-lite';
import instafeed from 'instafeed-lite';



class Insta extends Component {



render(){
  const options = {
    accessToken: 'access...',
    clientId: 'client...',
    get: 'user', // popular, user
    locationId: null,
    resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
    sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    tagName: null,
    userId: 123,
  }
  const instagramUrl = buildUrl(options)
  const data = instafeed(options)


  return(
    <div className="insta_wrap">



    </div>
  );
}

}

export default Insta;
