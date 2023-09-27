import { useRouter } from "next/router";

const useRoute = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const goPxTop100 = () => {
    router.push("/top100");
  };

  const goDiscount = () => {
    router.push("/discount");
  };

  const goRecreation = () => {
    router.push("/recreation");
  };


  return { goHome, goPxTop100, goDiscount, goRecreation };
};

export default useRoute;
