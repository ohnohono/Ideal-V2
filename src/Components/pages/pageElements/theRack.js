import React ,{ Component } from 'react';
import Image from 'react-bootstrap/image';


const TheRack = () => {
  return(
<div>

<div className="rack_text">
WHAT'S NEW ON THE RACK
</div>
<div className="rack_wrap">
<Image
style={{
  width: 'automatic',
  height: 300,
  marginRight: 20,
}}
src="/images/r1.png" rounded />
<Image
style={{
  width: 'automatic',
  height: 300,
  marginRight: 20,
}}
src="/images/r2.png" rounded />
<Image
style={{
  width: 'automatic',
  height: 300,
  marginRight: 20,
}}
src="/images/r3.png" rounded />
<Image
style={{
  width: 'automatic',
  height: 300,
  marginRight: 20,
}}
src="/images/r4.png" rounded />
</div>
</div>
  );
}

export default TheRack;
