import React ,{ useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';


const NewToast = () => {

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

return(

<Toast show={showA} onClose={toggleShowA}
style={{
     position: 'fixed',
     bottom: 0,
     right: 0,
     zIndex: 10,
   }}>
         <Toast.Header
         style={{
              backgroundColor: '#F4F8F5',
            }}>

           <strong
           style={{
                color: '#051F20',
              }}
           >An Ideal Deal</strong>
           <small
           style={{
                position: 'absolute',
                right: 15,
                color: '#051F20',


              }}
           >2 More Weeks!</small>
         </Toast.Header>
         <Toast.Body>Woohoo, Stop by while we have our St. Patricks Day Sale. <br /> 20% on all gold jewelry!</Toast.Body>
       </Toast>
     );
}

export default NewToast;
