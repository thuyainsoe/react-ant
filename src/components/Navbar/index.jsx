import React from "react";
import facebookLogo from "../../assets/facebook.png";
import profileImage from "../../assets/messi.jpg";
import style from "./style.module.css";
import Search from "antd/es/input/Search";
import { IoIosHome, IoMdMenu } from "react-icons/io";
import { LuListVideo } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Badge } from "antd";

const LogoAndSearch = () => {
  return (
    <div className={style.logoSearchContainer}>
      <div className="logo">
        <img src={facebookLogo} alt="logo" className={style.logo} />
      </div>
      <div className="search">
        <Search
          placeholder="input search text"
          allowClear
          style={{ width: 200 }}
        />
      </div>
    </div>
  );
};

const NavCatagories = () => {
  return (
    <div className={style.navCatagoryContainer}>
      <IoIosHome className={style.navIcon} />
      <LuListVideo className={style.navIcon} />
      <MdGroups2 className={style.navIcon} />
      <SiYoutubegaming className={style.navIcon} />
    </div>
  );
};

const ProfileDetail = () => {
  return (
    <div className={style.profileDetailContainer}>
      <IoMdMenu className={style.navIcon} />
      <Badge count={1} size="small">
        <FaFacebookMessenger className={style.navIconMessenger} />
      </Badge>
      <Badge count={1} size="small">
        <IoIosNotifications className={style.navIcon} />
      </Badge>
      <img
        src={profileImage}
        alt="profile_image"
        className={style.profileImage}
      />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <LogoAndSearch />
      <NavCatagories />
      <ProfileDetail />
    </div>
  );
};

export default Navbar;
