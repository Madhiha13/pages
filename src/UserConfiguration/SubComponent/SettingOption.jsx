import React from 'react';
//import { useHistory } from 'react-router-dom';
import "../../UserConfiguration_css/SettingOption.css";



const SettingOption = ({ handleDarkMode, handleLightMode, handleNotDisplay }) => {
  return (
    <div className="setting-options-overlay">
      <div className="setting-options">
    
        <button className="options-list">Home Page</button><br/>  {/* use onClick={goToHomePage} */}
        
        <button className="options-list"> Previous Page</button><br/> {/* use onClick={goBack} */}
        
        <button className="options-list" onClick={handleNotDisplay}>Cancel</button><br/>
        
      </div>
    </div>
  );
};

export default SettingOption;
