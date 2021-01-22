export interface TailwindProps {
  /** Layout */
  container?: Responsive<boolean>;
  boxSizing?: Responsive<BoxSizing>;
  display?: Responsive<Display>;
  float?: Responsive<Float>;
  clear?: Responsive<Clear>;
  objectFit?: Responsive<ObjectFit>;
  objectPosition?: Responsive<ObjectPosition>;
  overflow?: Responsive<Overflow>;
  overflowX?: Responsive<Overflow>;
  overflowY?: Responsive<Overflow>;
  overscroll?: Responsive<Overscroll>;
  overscrollX?: Responsive<Overscroll>;
  overscrollY?: Responsive<Overscroll>;
  position?: Responsive<Position>;
  top?: Responsive<TailwindSpaces>;
  left?: Responsive<TailwindSpaces>;
  bottom?: Responsive<TailwindSpaces>;
  right?: Responsive<TailwindSpaces>;
  inset?: Responsive<TailwindSpaces>;
  insetX?: Responsive<TailwindSpaces>;
  insetY?: Responsive<TailwindSpaces>;
  visible?: Responsive<boolean>;
  invisible?: Responsive<boolean>;
  zIndex?: Responsive<ZIndex>;

  /** Flex */
  flexDirection?: Responsive<FlexDirection>;
  flexWrap?: Responsive<FlexWrap>;
  flex?: Responsive<Flex>;
  flexGrow?: Responsive<FlexGrowShrink>;
  flexShrink?: Responsive<FlexGrowShrink>;
  order?: Responsive<Order>;

  textColor?: Responsive<TailwindColors>;
  borderColor?: Responsive<TailwindColors>;
  fillCurrent?: Responsive<boolean>;
}

type Responsive<T> = T | T[] | TailwindResponsive<T>;

interface TailwindResponsive<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}

type BoxSizing = "border" | "content";
type Display =
  | "block"
  | "hidden"
  | "flex"
  | "grid"
  | "inline"
  | "inline-block"
  | "inline-flex"
  | "inline-grid"
  | "flow-root"
  | "table"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row-group"
  | "table-row"
  | "contents";
type Float = "left" | "right" | "none";
type Clear = "left" | "right" | "both" | "none";
type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";
type ObjectPosition =
  | "bottom"
  | "center"
  | "left"
  | "left-bottom"
  | "left-top"
  | "right"
  | "right-bottom"
  | "right-top"
  | "top";
type Overflow = "auto" | "hidden" | "visible" | "scroll";
type Overscroll = "auto" | "contain" | "none";
type Position = "static" | "fixed" | "absolute" | "relative" | "sticky";
type ZIndex = "0" | "10" | "20" | "30" | "40" | "50" | "auto";
type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse";
type FlexWrap = "wrap" | "wrap-reverse" | "nowrap";
type Flex = "1" | "auto" | "initial" | "none";
type FlexGrowShrink = "0" | true;
type Order =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "first"
  | "last"
  | "none";

type TailwindSpaces =
  | "auto"
  | "px"
  | "0"
  | "0.5"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "8"
  | "10"
  | "12"
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "56"
  | "64"
  | "72"
  | "80"
  | "96"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4"
  | "full"
  | "-px"
  | "-0.5"
  | "-1"
  | "-2"
  | "-3"
  | "-4"
  | "-5"
  | "-6"
  | "-8"
  | "-10"
  | "-12"
  | "-16"
  | "-20"
  | "-24"
  | "-32"
  | "-40"
  | "-48"
  | "-56"
  | "-64"
  | "-72"
  | "-80"
  | "-96"
  | "-1/2"
  | "-1/3"
  | "-2/3"
  | "-1/4"
  | "-2/4"
  | "-3/4"
  | "-full";

type TailwindColors =
  | "gray-100"
  | "gray-200"
  | "gray-300"
  | "gray-400"
  | "gray-500"
  | "gray-600"
  | "gray-700"
  | "gray-800"
  | "gray-900"
  | "red-100"
  | "red-200"
  | "red-300"
  | "red-400"
  | "red-500"
  | "red-600"
  | "red-700"
  | "red-800"
  | "red-900"
  | "orange-100"
  | "orange-200"
  | "orange-300"
  | "orange-400"
  | "orange-500"
  | "orange-600"
  | "orange-700"
  | "orange-800"
  | "orange-900"
  | "yellow-100"
  | "yellow-200"
  | "yellow-300"
  | "yellow-400"
  | "yellow-500"
  | "yellow-600"
  | "yellow-700"
  | "yellow-800"
  | "yellow-900"
  | "green-100"
  | "green-200"
  | "green-300"
  | "green-400"
  | "green-500"
  | "green-600"
  | "green-700"
  | "green-800"
  | "green-900"
  | "teal-100"
  | "teal-200"
  | "teal-300"
  | "teal-400"
  | "teal-500"
  | "teal-600"
  | "teal-700"
  | "teal-800"
  | "teal-900"
  | "blue-100"
  | "blue-200"
  | "blue-300"
  | "blue-400"
  | "blue-500"
  | "blue-600"
  | "blue-700"
  | "blue-800"
  | "blue-900"
  | "indigo-100"
  | "indigo-200"
  | "indigo-300"
  | "indigo-400"
  | "indigo-500"
  | "indigo-600"
  | "indigo-700"
  | "indigo-800"
  | "indigo-900"
  | "purple-100"
  | "purple-200"
  | "purple-300"
  | "purple-400"
  | "purple-500"
  | "purple-600"
  | "purple-700"
  | "purple-800"
  | "purple-900"
  | "pink-100"
  | "pink-200"
  | "pink-300"
  | "pink-400"
  | "pink-500"
  | "pink-600"
  | "pink-700"
  | "pink-800"
  | "pink-900"
  | "current"
  | "black"
  | "white"
  | "transparent";
