import React from "react";
import {  FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/aakash-banjara-84719b23b/"> <FaLinkedin size={20}/> </a>
        <a href="https://www.instagram.com/aakashbanjara4">
          <FaInstagram size={20} />{" "}
        </a>
        <a href="https://github.com/AkashBanjara"> <FaGithub size={20}/>  </a> /aakashbanjara
      </div>
    </div>
  );
};

export default FollowOn;
