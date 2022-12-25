import Head from "next/head";

import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("../components/aboutMe"));
const Projects = dynamic(() => import("../components/projects"));
const Resume = dynamic(() => import("../components/resume"));
const RightMenu = dynamic(() => import("../components/rightMenu"));
const Skills = dynamic(() => import("../components/skills"));

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Head>
      <title>وب سایت شخصی رضا منوچهری</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="رضا منوچهری"/>
        <meta name="description" content="وب سایت شخصی رضا منوچهری"></meta>
        <meta
          name="keywords"
          content="reaza manouchehri, رضا منوچهری, وبسایت رضا منوچهری"
        ></meta>
        <meta property="og:title" content="وبسایت شخصی رضا منوچهری" />
        <meta property="og:site_name" content="سایت رضا منوچهری" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div className="flex flex-row-reverse flex-wrap ">
        <button
          className="fixed bottom-4 left-4 z-50 rounded-full border bg-neutral-100 p-2 shadow-md dark:bg-neutral-800"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme && theme === "dark" ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
        <RightMenu />
        <div className="flex w-full flex-col  space-y-20 p-8 md:w-2/3 xl:w-3/4 xl:p-20">
          <AboutMe />
          <Skills />
          <Resume />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Home;
