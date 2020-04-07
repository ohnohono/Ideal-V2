import React from 'react';
import Image from 'react-bootstrap/Image';

function Sell() {
  return (
    <div>
      <div className="sellHeader">
      WHERE WE SELL
      </div>

        <div className="sellContainer">

          <div className="sellBtn">
            <a href="https://ebay.com/usr/idealpawnbros" target="_blank">
            <Image src="/images/ebbay.png"/>
            </a>
          </div>


          <div className="sellBtn">
            <a href="https://gunbroker.com/All/search?IncludeSellers=2548630" target="_blank">
            <Image src="/images/ebbay.png"/>
            </a>
          </div>

          <div className="sellBtn">
            <a href="https://www.pawnguru.com/ga/doraville/pawn-shops/ideal-pawn-and-jewelry" target="_blank">
            <Image src="/images/ebbay.png"/>
            </a>
          </div>

       </div>
     </div>
  );
}

export default Sell;
