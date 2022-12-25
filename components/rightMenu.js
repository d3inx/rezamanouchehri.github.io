import Image from "next/image";

import useSWR from "swr";

import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";

import ProfilePic from "./../public/image/IMG_20221217_204902.jpg";

import { HeroIcons } from "../layout/HeroIcons";
import Link from "next/link";
import Loading from "./loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RightMenu = () => {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const { user } = data;

  return (
    <div className="relative flex h-[90vh] w-full flex-col items-center justify-center space-y-4 bg-[url('/image/background.jpg')] bg-cover bg-center text-neutral-50 md:fixed md:top-0 md:right-0 md:h-screen md:w-1/3 xl:w-1/4">
      <div className="absolute top-0 left-0 h-full w-full bg-neutral-900/75 backdrop-blur-sm">
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
        <h1 className="w-fit text-4xl">{user?.name}</h1>
        <span className="w-fit text-xl">{user?.job}</span>
        <div className="flex flex-col space-y-4">
          {user.list.map(({ id, span, icon, link }) => (
            <div
              className="flex flex-row justify-center xl:justify-start"
              key={id}
            >
              <HeroIcons icon={icon} iconClass="w-6 h-6" />

              {link ? (
                <Link
                  href={link}
                  target="_blank"
                  className="break-all px-4 text-lg font-bold xl:text-xl"
                >
                  {span}
                </Link>
              ) : (
                <span className="break-all px-4 text-lg font-bold xl:text-xl">
                  {span}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-evenly gap-8">
          <Link href={"https://github.com/d3inx"} target="_blank">
            {" "}
            <SiGithub className="h-7 w-7" />{" "}
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rezamanouchehri/"}
            target="_blank"
          >
            {" "}
            <SiLinkedin className="h-7 w-7" />{" "}
          </Link>
          <Link href={"https://telegram.me/d3inx"} target="_blank">
            {" "}
            <SiTelegram className="h-7 w-7" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
