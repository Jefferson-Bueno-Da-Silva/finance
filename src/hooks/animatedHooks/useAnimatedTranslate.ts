import { useDynamicAnimation } from "moti";

const useAnimatedTranslate = (initialState: number) =>
  useDynamicAnimation(() => ({
    translateY: initialState,
    opacity: 0,
    rotate: "-90deg",
  }));

export default useAnimatedTranslate;
