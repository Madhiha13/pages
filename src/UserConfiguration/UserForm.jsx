import React, { useState } from 'react';
import '../UserConfiguration_css/UserForm.css'; // Import CSS file for UserForm
import UserDetailsDisplay from './SubComponent/UserDetailsDisplay';
import ToggleMenu from './SubComponent/ToggleMenu';
import SettingOption from './SubComponent/SettingOption';
import { UserIconSvg, whitevariationSvg, SearchIconSvg,SettingsIconSvg,binSvg, addUserIconSvg, NextIconSvg, GreenBulletSvg, RedBulletSvg } from '../assets';

const UserForm = () => {
  const [users, setUsers] = useState([{
    userImage:`https://via.placeholder.com/80x80?text=${'HP'}`,
    name: 'Hari',
    email: 'johndoe@example.com',
    role: 'Admin',
    status: 'Active'
  }]);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [showSettingOptions, setShowSettingOptions] = useState(false);


  // const [permanentUser, setPermanentUser] = useState({
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   role: 'Admin',
  //   status: 'Active'
  // });


  const handleUserSubmit = (formData) => {
  const firstChar = formData.name.charAt(0).toUpperCase();
  const imageSrc = `https://via.placeholder.com/80x80?text=${firstChar}`;
  formData.userImage = imageSrc;
    setUsers([...users, formData]);
    setShowForm(false);
  };

  // const handleDeletePermanentUser = () => {
    
  //   setPermanentUser(null); // Set permanentUser to null or perform any other delete logic
  // };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1); // Remove the user at the specified index
    setUsers(updatedUsers);
  };

  // const handleTogglePermanentUserStatus = () => {
  //   setPermanentUser((prevPermanentUser) => ({
  //     ...prevPermanentUser,
  //     status: prevPermanentUser.status === 'Inactive' ? 'Active' : 'Inactive'
  //   }));
  // };

  const handleToggleUserStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = {
      ...updatedUsers[index],
      status: updatedUsers[index].status === 'Inactive' ? 'Active' : 'Inactive'
    };
    setUsers(updatedUsers);
  };


  const filteredUsers = users.filter((user) => {
    const { name, email, role } = user;
    const query = searchQuery.toLowerCase();
    return name.toLowerCase().includes(query) || email.toLowerCase().includes(query) || role.toLowerCase().includes(query);
  });

  const handleInputFocus = () => {
    // Hide the search icon when input field is focused
    setShowSearchIcon(false);
  };

  const handleCancel = () => {
    // Add logic to close the modal or reset form state
    setShowForm(false); // Example: Hide the form modal
  };
  

  const handleNotDisplay = () => {
    setShowSettingOptions(false);
  };

  const handleShowOptions = () => {
    setShowSettingOptions(true);
  };
  
  const hasMoreUsers = users.length > 3; // Check if there are more users beyond the visible ones
  
  return (
    <div className="user-configuration-1st-time-us">
    
      <div className="user-configuration-1st-time-us-child" />
      <img
        className="white-variation-11"
        alt=""
        src={whitevariationSvg}
      />
      <img className="user-5-11" alt="" src={UserIconSvg} />
      <b className="beyos1">BeyOS</b>
      <img className="settings-1-icon1" alt="" src={SettingsIconSvg} onClick={handleShowOptions}/>
      {/* <div className="user-configuration-1st-time-us-item" /> */}
      
      <div>
        <input className="user-configuration-1st-time-us-inner"
            type="text"
            placeholder="        Search  User"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleInputFocus} 
        />
      </div>
      {showSearchIcon && <img className="search-icon1" alt="" src={SearchIconSvg} />}
      <div className="user-configuration-1st-time-us-child1" />
      <img className="add-1-icon1" alt="" src={NextIconSvg} />
      <b className="next1">NEXT</b>
      <div className="user-configuration-1st-time-us-child2"/>
      <b className="add-user1" onClick={() => setShowForm(true)}>ADD USER</b>
      <img className="add-5-icon1" alt="" src={addUserIconSvg} />
      {/*  */}
      <div className="user-details-container-wrapper">
      <div className={`user-details-container ${hasMoreUsers ? 'scrollable-container' : ''}`}>
      <table className="user-details-table">
        <thead>
          <tr>
            {/* <th><div className="name1">NAME</div></th>
            <th><div className="email1">EMAIL</div></th>
            <th><div className="role1">ROLE</div></th>
            <th><div className="active4">STATUS</div></th> */}
            <th></th>
            <th></th>
            <th><div className='name'>NAME</div></th>
            <th><div className='email'>EMAIL</div></th>
            <th><div className='role'>ROLE</div></th>
            <th><div className='status'>STATUS</div></th>
          </tr>
        </thead>
        {/* {permanentUser && (
        <tbody>
          <tr>
            <td> <p className="hari-prasad1">{permanentUser.name}</p></td>
            <td><a href={`mailto:${permanentUser.email}`} className="email-link"><p className="haribeyondsustainabilityin1">{permanentUser.email}</p></a></td>
            <td> <p className="admin1">{permanentUser.role}</p></td>
            <td> <p className="permanent-user-status">
            </p></td>
            <div className="user-configuration-1st-time-us-child3" /> 
      <div className="user-configuration-1st-time-us-child5" />
      <div className="user-configuration-1st-time-us-child6">
          <div className="user-status">
            {permanentUser.status === 'Inactive' ? (
              <div className="status-inactive">
                <img src={RedBulletSvg} alt="Inactive" /> Inactive
              </div>
            ) : (
              <div className="status-active">
                <img src={GreenBulletSvg} alt="Active" /> Active
              </div>
            )}
          </div>
        </div>
        <img className="bin-2-1-icon1" alt="" src={binSvg} onClick={handleDeletePermanentUser} />
        <div className="on-button-1-icon1">
          <ToggleMenu userData={permanentUser} onToggle={handleTogglePermanentUserStatus}/>
        </div>
        <div>
          <input className="user-configuration-1st-time-us-child4" type="checkbox" id="permanentUserCheckbox" />
          <label htmlFor="permanentUserCheckbox" className="rectangle-checkbox"></label>
        </div>
        <div>
          <img className="user-configuration-1st-time-us-child7" alt="" src={UsersmSvg} />
        </div>
          </tr>
        </tbody>
        )} */}
        <tbody> 
          {/* Content for each user in the users array */}
          {filteredUsers.map((userData, index) => (
            <tr key={index} className='user-details-row'>
            <td><div>
               <input className="checkbox" type="checkbox" id="permanentUserCheckbox" />
               <label htmlFor="permanentUserCheckbox"></label>
            </div></td>


            <td><div>
                <img className="userImage" alt="" src={userData.userImage} />
                </div>
            </td>

              <td><div className='user_name'>{userData.name}</div></td>
              <td><div className='user_mail'><a href={`mailto:${userData.email}`} className="email-link">{userData.email}</a></div></td>
              <td><div className='user_role'>{userData.role}</div></td>
              {/* <td></td> */}
              <td><div className="user_status">
              <div className="user_status_role">
                {userData.status==="Inactive" ? (
                    <div className="status-inactive ">
                    <img src={RedBulletSvg} alt="Inactive" /> Inactive
                  </div>) : (
                  <div className="status-active ">
                    <img src={GreenBulletSvg} alt="active" /> Active
                  </div>
                )}
              </div>
        </div></td>
        
        <td><div className="toggleMenu">
          <ToggleMenu userData={userData} onToggle={() => handleToggleUserStatus(index)}/>
        </div></td>
        <td><div className='bin'><img className="" alt="" src={binSvg} onClick={() => handleDeleteUser(index)} /></div></td>
        </tr>
          ))}
        </tbody>
        
      </table>
      {hasMoreUsers && (
          <div className="scroll-wrapper">
            <div className="scroll-bar"></div>
          </div>
        )}
      </div>

      </div>
      {/*  */}
      {showSettingOptions && (
        <SettingOption
          handleNotDisplay={handleNotDisplay}
        />
      )}
      
      {showForm && <UserDetailsDisplay onSubmit={handleUserSubmit} onCancel={handleCancel} />}
    </div>
  );
};

export default UserForm;
