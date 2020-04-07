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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut.
          </Card.Text>
          </Card.ImgOverlay>

      </Card>
    
        <Card>

          <Card.Img src="/images/15slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">Marketplace</Card.Title>
          <Card.Text className="txt_one">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut.
          </Card.Text>
          </Card.ImgOverlay>

        </Card>

        <Card>
          <Card.Img src="/images/10slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">Firearms</Card.Title>
          <Card.Text className="txt_one">
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut.
          </Card.Text>
          </Card.ImgOverlay>

        </Card>
        </CardGroup>

      </div>
    </div>

  );
}

export default Group;
