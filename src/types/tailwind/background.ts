import { TailwindColors, TailwindOpacities } from "./color";

export type BackgroundAttachment = "fixed" | "local" | "scroll";
export type BackgroundClip = "border" | "padding" | "content" | "text";
export type BackgroundColor = TailwindColors;
export type BackgroundOpacity = TailwindOpacities;
export type BackgroundPosition =
  | "bottom"
  | "center"
  | "left"
  | "left-bottom"
  | "left-top"
  | "right-bottom"
  | "right-top"
  | "top";
export type BackgroundRepeat =
  | "repeat"
  | "no-repeat"
  | "repeat-x"
  | "repeat-y"
  | "repeat-round"
  | "repeat-space";
export type BackgroundSize = "auto" | "cover" | "contain";
export type BackgroundImage =
  | "none"
  | "gradient-to-t"
  | "gradient-to-tr"
  | "gradient-to-r"
  | "gradient-to-br"
  | "gradient-to-b"
  | "gradient-to-bl"
  | "gradient-to-l"
  | "gradient-to-tl";
export type GradientColor = TailwindColors;
