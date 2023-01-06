import Link from "next/link";

import useSWR from "swr";

import Loading from "./loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Projects = () => {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const { about } = data;

  return (
    <div>
      <h2 className="w-fit text-5xl xl:text-6xl">نمونه کار ها</h2>
      <div className="mt-20 flex flex-row flex-wrap">
        {data.map(({ name, description, link }) => (
          <div className="w-full xl:w-1/2" key={name}>
            <Link
              target={"_blank"}
              href={link}
              className="duration-400 m-4 flex flex-col justify-between rounded-3xl border-2 bg-neutral-100 p-6 shadow-md hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-500/40 xl:m-8"
            >
              <h3 className="text-3xl">{name}</h3>
              <p className="my-4 text-justify">{description}</p>
              <button
                className=" w-fit border-2 border-neutral-50
               bg-neutral-900 px-4 py-2 text-neutral-50 duration-500 hover:border-neutral-900 hover:bg-neutral-50 hover:text-neutral-900
               dark:border-neutral-800 dark:bg-neutral-50 dark:text-neutral-800 dark:hover:border-neutral-50 dark:hover:bg-neutral-800 dark:hover:text-neutral-50
               "
              >
                مشاهده سایت
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
