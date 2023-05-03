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
    gradientColors: {
      red: Array<string>;
      purple: Array<string>;
      gray: Array<string>;
      black: Array<string>;
      white: Array<string>;
      green: Array<string>;
      blue: Array<string>;
    };
  }
}
