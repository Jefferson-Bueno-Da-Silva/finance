import { useAnimationState } from "moti";

const useAnimatedRotate = () => {
  return useAnimationState({
    from: {
      rotate: "45deg",
    },
    to: {
      rotate: "0deg",
    },
  });
};

export default useAnimatedRotate;
