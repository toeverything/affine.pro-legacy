import "styled-components";

// See https://styled-components.com/docs/api#create-a-declarations-file
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}
