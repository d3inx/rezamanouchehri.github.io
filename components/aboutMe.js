import useSWR from "swr";
import Loading from "./loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AboutMe = () => {
  const { data, error } = useSWR("/api/aboutMe", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;

  const { about } = data;

  return (
    <div>
      <h2 className="w-fit text-5xl xl:text-6xl">درباره من</h2>
      <p className="mt-8 w-3/4 text-justify text-lg tracking-wide xl:mt-12 xl:text-xl xl:leading-8">
        {about}
      </p>
    </div>
  );
};

export default AboutMe;
