import React from 'react';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/pages/homePage';
import Policy from './Components/pages/policiesPage';
import Appointments from './Components/pages/appAvailpage';
import SideBar from './Components/sideBarComponent/sideBar';
import SideBarExtended from './Components/sideBarComponent/sideBarExtended';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/default.min.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './Components/scrollTop';
import Register from './Components/pages/regPage';
import NewToast from './Components/pages/toast/toast';


function App() {
  return (
 <ParallaxProvider
 >
    <Router>
      <Route render={({ location }) =>(


      <div className="App">
        <Header />

        <SideBar />



        <ScrollToTop />

          <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={{enter: 600, exit: 300}}
            classNames='trans'
            >
              <Switch location={location}>
                <Route exact={true} path='/' component={HomePage} />
                <Route exact={true} path='/policies' component={Policy} />
                <Route exact={true} path='/appointments' component={Appointments} />
                <Route exact={true} path='/register' component={Register} />
              </Switch>
            </CSSTransition>
        </TransitionGroup>

        <Footer />

      </div>
          )}/>
    </Router>
 </ParallaxProvider>
  );
}

export default App;
