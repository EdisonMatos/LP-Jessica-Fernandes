import React from 'react'
import MotionDivDownToUp from '../../animation/MotionDivDownToUp'
import content from '../../../content/content'

function LogoFooter() {
  return (
    <MotionDivDownToUp>
      <div className="h-[115px] flex justify-start items-center">
        <img
          src={content.texts.navbar.logo.img}
          alt={content.texts.navbar.logo.alt}
          width={385}
          height={154}
          className="max-h-[88px] w-auto"
          // className="max-h-[88px] w-auto bg-bgSectionLight p-[12px]"
        ></img>
      </div>
    </MotionDivDownToUp>
  )
}

export default LogoFooter
