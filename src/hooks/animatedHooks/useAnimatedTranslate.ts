import { useDynamicAnimation } from "moti";

const useAnimatedTranslate = (initialState: number) =>
  useDynamicAnimation(() => ({
    translateY: initialState,
  }));

export default useAnimatedTranslate;
