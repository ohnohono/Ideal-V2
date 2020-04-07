import React from 'react';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

function Sell() {
  return (
    <div>
      <div className="sellHeader">
      WHERE WE SELL
      </div>

      <div className="cardGroup">

      <CardGroup>

      <Card>

          <Card.Img src="/images/11slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">Ebay</Card.Title>
          <Card.Text className="txt_one">
              If it is not in our store than we might have it on Ebay!
          </Card.Text>
          </Card.ImgOverlay>

      </Card>

        <Card>

          <Card.Img src="/images/15slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">Gun Broker</Card.Title>
          <Card.Text className="txt_one">
          Get a great deal on a firearm today!


          </Card.Text>
          </Card.ImgOverlay>

        </Card>

        <Card>
          <Card.Img src="/images/10slidedark.png" className="about_card"/>
          <Card.ImgOverlay className="over_one">
          <Card.Title className="title_one">Pawn Guru</Card.Title>
          <Card.Text className="txt_one">
              Shop our growing list of inventory on our pawn guru store.
          </Card.Text>
          </Card.ImgOverlay>

        </Card>
        </CardGroup>

      </div>
    </div>

    );
    }

    export default Sell;
