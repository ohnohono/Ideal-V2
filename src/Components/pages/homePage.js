import React from 'react';
import MainSlider from './pageElements/mainSlider';
import Scroll from './pageElements/scrollAnim';
import Sell from './pageElements/sellBtns';
import { ParallaxProvider } from 'react-scroll-parallax';
import Insta from './pageElements/instaFeed';
import ScrollInNav from '../scrollAct';
import Group from './pageElements/aboutTeam';
import MapMain from './pageElements/mapMain';
import TheRack from './pageElements/theRack';


function HomePage() {
  return (
    <div>
    <ParallaxProvider
    >
      <MainSlider />
      <Scroll />
      <ScrollInNav scrollInHeight={350}>
      <Group />
      </ScrollInNav>

      <Insta />
      <Sell />
      <TheRack />
      <MapMain />
      </ParallaxProvider>


    </div>
  );
}

export default HomePage;
