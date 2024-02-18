import React from "react";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div class="col s6 m2">
      <img alt="" src={value} class="responsive-img" height="100"/>
      <body>{skill}</body>
      <br/>
    </div>
  );
}

export default SkillsBar;
