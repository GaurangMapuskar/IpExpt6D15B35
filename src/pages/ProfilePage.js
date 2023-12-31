import React from 'react';
import styled from 'styled-components';
import profile from "./profile.png"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Profile = styled.div`
align:center;
display:flex;
padding:20px;
top:center
`
const ProfilePage = () => {
  return (

    <div>
      <Navbar />
      
      <Profile>
      <div style={{display:"flex"}}>
        <div style={{backgroundColor:"#ade645",width:"500px"}}>
        <img src={profile} width="300px" style={{marginRight:"200px",margin:"100px",position:"fixed",borderRadius:"150px"}}></img>
        </div>
        <div style={{border:"1px solid black",marginLeft:"0px",height:"500px"}}></div>
        <div  style={{backgroundColor:"#4755ed",width:"1000px"}}>
        <div style={{marginTop:"200px",marginLeft:"10px",color:"white"}}>
        <h2>Full Stack Developer</h2>
        <p>I like to craft,design and code a solid Websites with great user experience</p>
        </div>
        </div>
      </div>
      </Profile>
      <Footer name={"Gaurang Mapuskar"} number={9969780696} />
    </div>

  );
};

export default ProfilePage;
