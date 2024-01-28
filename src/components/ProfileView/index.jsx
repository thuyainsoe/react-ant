import React from "react";
import style from "./style.module.css";
import profileImage from "../../assets/messi.jpg";
import { CgProfile } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
import { BiSolidDownArrow } from "react-icons/bi";

const ProfileView = ({ tabClick, tab }) => {
  return (
    <div className={style.profileViewContainer}>
      <div className={style.coverContainer}></div>
      <div className={style.profileCatagoryContainer}>
        <div className={style.imageAndNameContainer}>
          <img
            src={profileImage}
            alt="profile image"
            className={style.profileImage}
          />
          <div className={style.nameAndMutual}>
            <h2>Pyae Phyo Kyaw</h2>
            <span>17 mutual friends</span>
          </div>
        </div>

        <div className={style.activityContainer}>
          <div className={style.isFriendorNot}>
            <CgProfile className={style.activityIcon} />
            Friend
          </div>
          <div className={style.messageButton}>
            <RiMessengerLine className={style.activityIconMessenger} />
            Message
          </div>
          <div className={style.dropdownActivity}>
            <BiSolidDownArrow className={style.activityIconDropdown} />
          </div>
        </div>
      </div>
      <div className={style.pageTabsContainer}>
        <ul>
          <li>Posts</li>
          <li
            className={tab === "about" && style.pageActive}
            onClick={() => {
              tabClick("about");
            }}
          >
            About
          </li>
          <li
            className={tab === "friends" && style.pageActive}
            onClick={() => {
              tabClick("friends");
            }}
          >
            Friends
          </li>
          <li>Photo</li>
          <li>Videos</li>
          <li>Checkins</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileView;
