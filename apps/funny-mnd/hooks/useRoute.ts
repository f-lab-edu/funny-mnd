import { useRouter } from "next/router";

const useRoute = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return { goHome };
};

export default useRoute;
