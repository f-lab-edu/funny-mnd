import { useRouter } from "next/router";

const useRoute = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const goPxTop100 = () => {
    router.push("/top100");
  };

  return { goHome, goPxTop100 };
};

export default useRoute;
