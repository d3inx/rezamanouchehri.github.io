import Link from "next/link";

import useSWR from "swr";

import Loading from "./loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Resume = () => {
  const { data, error } = useSWR("/api/resume", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const { about } = data;

  return (
    <div>
      <h2 className="w-fit text-5xl xl:text-6xl">سوابق کاری</h2>
      <div className="mt-20 flex flex-row flex-wrap">
        {data.map(({ name, startDate, endDate, link }) => (
          <div className="w-full xl:w-1/2" key={name}>
            <Link
              target={"_blank"}
              href={link}
              className="duration-400 m-4 flex flex-col justify-between rounded-3xl border-2 bg-neutral-100 p-6 shadow-md hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-500/40 xl:m-8"
            >
              <h3 className="text-3xl">{name}</h3>
              <div className="my-4">
                <div className="text-lg">
                  <span className="pl-2">از</span>
                  {startDate}
                </div>
                <div className="text-lg">
                  <span className="pl-2">تا</span>
                  {endDate}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
