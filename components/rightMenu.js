import Image from "next/legacy/image";


import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";

import ProfilePic from "./../public/image/IMG_20221217_204902.jpg";

import Link from "next/link";

import { EnvelopeIcon, IdentificationIcon, PhoneIcon } from "@heroicons/react/24/solid";

const RightMenu = () => {
 
  return (
    <div className="relative flex h-[90vh] w-full flex-col items-center justify-center text-neutral-50 md:fixed md:top-0 md:right-0 md:h-screen md:w-1/3 xl:w-1/4">
      <Image
        className="absolute top-0 left-0 z-30 object-cover "
        src="/image/background.jpg"
        layout="fill"
        priority
        alt=""
      />

      <div className="absolute top-0 left-0 z-40 mt-0 h-full w-full bg-neutral-900/75 backdrop-blur-sm">
        {" "}
      </div>

      <div className="z-50 mt-52 flex flex-col items-center space-y-8 xl:block">
        <Image
          className="rounded-3xl shadow-lg"
          src={ProfilePic}
          priority
          alt="رضا منوچهری"
          width={180}
          height={180}
        />
        <h1 className="w-fit text-4xl">رضا منوچهری</h1>
        <span className="w-fit text-xl">فرانت اند دولوپر</span>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-center xl:justify-start">
            <IdentificationIcon className="w-6 h-6" />
            <span className="break-all px-4 text-lg  xl:text-xl">۱۹ ساله</span>
          </div>
          <div className="flex flex-row justify-center xl:justify-start">
            <PhoneIcon className="w-6 h-6" />
            <Link
              href="tel:+989032326619"
              target="_blank"
              className="break-all px-4 text-lg  xl:text-xl"
              aria-label="phone number"
            >
              ۰۹۰۳۲۳۲۶۶۱۹
            </Link>
          </div>
          <div className="flex flex-row justify-center xl:justify-start">
            <EnvelopeIcon className="w-6 h-6" />
            <Link
              href="mailto:mr.reza.rm8224@gmail.com"
              target="_blank"
              className="break-all px-4 text-lg  xl:text-xl"
              aria-label="email"
            >
              mr.reza.rm8224@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly gap-8">
          <Link
            href={"https://github.com/d3inx"}
            aria-label="reza manouchehri github page link"
            target="_blank"
          >
            {" "}
            <SiGithub className="h-7 w-7" />{" "}
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rezamanouchehri/"}
            aria-label="reza manouchehri linkedin page link"
            target="_blank"
          >
            {" "}
            <SiLinkedin className="h-7 w-7" />{" "}
          </Link>
          <Link
            href={"https://telegram.me/d3inx"}
            aria-label="reza manouchehri telegram link"
            target="_blank"
          >
            {" "}
            <SiTelegram className="h-7 w-7" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
