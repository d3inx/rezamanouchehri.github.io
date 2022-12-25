import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="fixed top-0 right-0 z-50 flex h-screen w-screen items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <AiOutlineLoading3Quarters className="h-12 w-12 animate-spin fill-neutral-900 dark:fill-neutral-50" />
    </div>
  );
};

export default Loading;
