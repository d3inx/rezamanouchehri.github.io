import useSWR from "swr";
import Loading from "./loading";

import { SiHtml5 , SiCss3 , SiTailwindcss , SiBootstrap , SiJavascript , SiReact , SiNextdotjs } from 'react-icons/si';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const icons = {
  SiHtml5 : <SiHtml5 className="w-16 h-16" />,
  SiCss3 : <SiCss3 className="w-16 h-16" />,
  SiTailwindcss : <SiTailwindcss className="w-16 h-16" />,
  SiBootstrap : <SiBootstrap className="w-16 h-16" />,
  SiJavascript : <SiJavascript className="w-16 h-16" />,
  SiReact : <SiReact className="w-16 h-16" />,
  SiNextdotjs : <SiNextdotjs className="w-16 h-16" />,
}

const Skills = () => {
  const { data, error } = useSWR("/api/skills", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  return (
    <div>
      <h2 className="w-fit text-5xl xl:text-6xl">مهارت های من</h2>
      <div className="mt-20 flex flex-row flex-wrap">
        {data.map(({ name, iconName }) => (
          <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4" key={iconName}>
            <div className="duration-400 m-4 flex flex-col items-center justify-between rounded-3xl border-2 bg-neutral-100 p-4 shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-500/40 xl:m-8">
              {icons[iconName]}
              <span className="mt-4 ">{name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
