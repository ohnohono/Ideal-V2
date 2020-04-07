import React from 'react';
import MainSlider from './pageElements/mainSlider';
import Scroll from './pageElements/scrollAnim';
import Sell from './pageElements/sellBtns';

import Insta from './pageElements/instaFeed';
import ScrollInNav from '../scrollAct';
import Group from './pageElements/aboutTeam';
import MapMain from './pageElements/mapMain';
import TheRack from './pageElements/theRack';


function HomePage() {
  return (
    <div>
      <MainSlider />
      <Scroll />
      <ScrollInNav scrollInHeight={350}>
      <Group />
      </ScrollInNav>

      <Insta />
        <Sell />
      <TheRack />
      <MapMain />


    </div>
  );
}

export default HomePage;
