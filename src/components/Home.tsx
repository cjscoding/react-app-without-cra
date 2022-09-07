import React from "react";
import Nav from "./Nav";
import style from "../style/HomeStyle.module.css";

const Home = () => {
  return (
    <div>
      <span className={style.username}>Hello Sue</span>
      <Nav />
    </div>
  );
};
export default Home;
