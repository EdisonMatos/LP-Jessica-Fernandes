import React from "react";
import contentLp01 from "../../../../../content/contentLp01";
import MotionDivDownToUp from "../../../../animation/MotionDivDownToUp";

function LogoAboutLpv() {
  return (
    <MotionDivDownToUp className=" w-[100%] justify-center desktop1:w-[415px] desktop2:w-[485px] flex desktop1:justify-center">
      <img
        src={contentLp01.about.imgAbout.img}
        alt={contentLp01.about.logo.alt}
        className="w-[90%] tablet1:w-[90%] desktop1:w-full bg-bgSectionLight rounded-xl p-[40px] phone3:p-[40px] tablet1:p-[60px] tablet2:p-[70px] desktop1:p-[60px]"
      />
    </MotionDivDownToUp>
  );
}

export default LogoAboutLpv;
