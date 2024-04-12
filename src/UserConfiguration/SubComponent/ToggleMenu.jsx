import React from 'react';
import { Onbutton,Offbutton } from '../../assets';
const ToggleMenu = ({ userData, onToggle }) => {
    const { status } = userData;
    const isInactive = status === 'Inactive';
  
    const handleClick = () => {
      onToggle(); // Call the provided onToggle function to update the status
    };

  return (
    <div className="toggle-menu" onClick={handleClick}>
      {isInactive ? (
        <div className="toggle-off">
            <img src={Offbutton} alt=""></img>
        </div>
      ) : (
        <div className="toggle-on" >
            <img src={Onbutton} alt=""></img>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
