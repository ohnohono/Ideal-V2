import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function Group () {
  return (
    <div>
      <div className="about_text">
    ABOUT US
      </div>

      <div className="cardGroup">

      <CardGroup>

      <Card>

          <Card.Img src="/images/11slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">Loans</Card.Title>
          <Card.Text className="txt_one">
              We make it easy and offer great loan value.
               We offer the best loan terms in the valley.
                The safety of your property is our primary concern.
                 All loans are insured by Llyod's Of London.
          </Card.Text>
          </Card.ImgOverlay>

      </Card>

        <Card>

          <Card.Img src="/images/15slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">We Buy Gold And Silver</Card.Title>
          <Card.Text className="txt_one">
          We pay the highest price for gold, silver and platinum In Arizona.
          </Card.Text>
          </Card.ImgOverlay>

        </Card>

        <Card>
          <Card.Img src="/images/10slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">Firearms</Card.Title>
          <Card.Text className="txt_one">
            We have a huge selection of firearms, ammunition and accessories.
             We buy and make loans on firearms and ammunition. 
          </Card.Text>
          </Card.ImgOverlay>

        </Card>
        </CardGroup>

      </div>
    </div>

  );
}

export default Group;
