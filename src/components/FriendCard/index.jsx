import React from "react";
import style from "./style.module.css";
import profileImg from "../../assets/profile.jpg";

const FriendCard = ({ friend }) => {
  return (
    <div className={style.friendCardContainer}>
      <img
        className={style.friendProfileImage}
        src={profileImg}
        alt="profile image"
      />
      <div className={style.friendDetail}>
        <h2 className={style.friendName}>{friend.name}</h2>
        <p className={style.frinedMutual}>{friend.mutual} mutual</p>
      </div>
    </div>
  );
};

export default FriendCard;
