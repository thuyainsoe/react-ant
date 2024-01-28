import style from "./style.module.css";
import { MdOutlineWork } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import FriendCard from "../FriendCard";

const friendData = [
  {
    name: "Aung Aung",
    mutual: 20,
  },
  {
    name: "Aung Myo",
    mutual: 22,
  },
  {
    name: "Khant Si Thu",
    mutual: 32,
  },
  {
    name: "Kyaw Ye Aung",
    mutual: 123,
  },
  {
    name: "Nay Toe",
    mutual: 90,
  },
];

const AboutDetail = () => {
  return (
    <div className={style.profileDetailContainer}>
      <div className={style.profileLeftContainer}>
        <h1 className={style.aboutTitle}>About</h1>
        <ul className={style.aboutList}>
          <li>Overview</li>
          <li>Work and Education</li>
          <li>Places lived</li>
          <li>Contact and basic info</li>
          <li>Family and relationships</li>
          <li>Details about Pyae Phyo</li>
          <li>Live Events</li>
        </ul>
      </div>
      <div className={style.profileRightContainer}>
        <ul className={style.aboutDetail}>
          <li>
            <MdOutlineWork className={style.aboutDetailIcon} />
            Senior Mobile Developer at evolxIT
          </li>
          <li>
            <BsFillMortarboardFill className={style.aboutDetailIcon} />
            No schools/universities to show
          </li>
          <li>
            <FaHome className={style.aboutDetailIcon} />
            Lives in Heho
          </li>
          <li>
            <FaLocationArrow className={style.aboutDetailIcon} />
            From Heho
          </li>
          <li>
            <FaHeart className={style.aboutDetailIcon} />
            In a relationship
          </li>
        </ul>
      </div>
    </div>
  );
};

const FriendDetail = () => {
  return (
    <div className={style.friendDatailContainer}>
      <h1 className={style.friendTitle}>Friends</h1>
      <div className={style.friendCardContainer}>
        {friendData.map((friend) => (
          <FriendCard friend={friend} />
        ))}
      </div>
    </div>
  );
};

const ProfileDetail = ({ tab }) => {
  return (
    <>
      {tab === "about" && <AboutDetail />}
      {tab === "friends" && <FriendDetail />}
    </>
  );
};

export default ProfileDetail;
