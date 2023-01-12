import React from 'react'
import profile1 from '../img/profile-1.jpg'
import profile2 from '../img/profile-2.jpg'
import profile3 from '../img/profile-3.jpg'
import profile4 from '../img/profile-4.jpg'
import AddProduct from '../pages/AddProduct'

const Products = ({setMenu}) => {

 

  const handleBtnMenuClick = () => {
    setMenu('block')

  }
  const body = document.body;
  //const themeToggler = document.querySelector(".theme-toggler");
  const handleTheme = () => {
    if(localStorage) {
      body.classList.add('dark-theme-var')
     // themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
     // themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    } else {
     return body.classList.replace('none')
    }
  }



  return (
    <div className="right">
      <div className="top">
        <button onClick={handleBtnMenuClick} id="menu-btn">
          <span className="material-icons-sharp">menu</span>
        </button>
        <div onClick={handleTheme} className="theme-toggler">
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div>
        <div className="profile">
          <div className="info">
            <p>Hey, <b>Jorge</b></p>
            <small className="text-muted">Admin</small>
          </div>
        </div>
        <div className="profile-photo">
          <img src={profile1} alt="Profile" />
        </div>
      </div>
      {
        //! STATE
      }
      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src={profile2} alt="Profile-2" />
            </div>
            <div className="message">
              <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>

          <div className="update">
            <div className="profile-photo">
              <img src={profile3} alt="Profile-3" />
            </div>
            <div className="message">
              <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>

          <div className="update">
            <div className="profile-photo">
              <img src={profile4} alt="Profile-4" />
            </div>
            <div className="message">
              <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>
      <AddProduct/>
    </div>
  )
}

export default Products