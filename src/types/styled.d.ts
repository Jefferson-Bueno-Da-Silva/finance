import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    primary: {
      white: string;
      whiteSmoke: string;
      black: string;
      darkGreen: string;
      cleanGreen: string;
      darkRed: string;
      gray: string;
    };
    secondary: {
      separator: string;
      white: string;
      black: string;
    };
    commons: {
      error: string;
    };
  }
}
