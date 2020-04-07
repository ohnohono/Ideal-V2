import React from 'react';
import Spinner from 'react-bootstrap/Spinner';



function Scroll() {
  return (
    <div className="scroll-container">
      <div className="scroll-inner">
        <Spinner animation="grow" variant="secondary" size="sm"/>
      </div>

      <div className="scroll-inner2">
        <Spinner animation="grow" variant="secondary" size="sm"/>
      </div>

      <div className="scroll-inner3">
        <Spinner animation="grow" variant="secondary" size="sm"/>
      </div>


    </div>
  );
}

export default Scroll;
