import {
  AlignContent,
  AlignItems,
  AlignSelf,
  JustifyContent,
  JustifyItems,
  JustifySelf,
  PlaceContent,
  PlaceItems,
  PlaceSelf,
} from "./alignment";
import { TailwindColors } from "./color";
import { FlexDirection, FlexWrap, Flex, FlexGrowShrink, Order } from "./flex";
import {
  GridTemplateCols,
  GridTemplateRows,
  GridCols,
  GridRows,
  GridFlow,
  GridAuto,
  Gap,
} from "./grid";
import {
  BoxSizing,
  Display,
  Float,
  Clear,
  ObjectFit,
  ObjectPosition,
  Overflow,
  Overscroll,
  Position,
  ZIndex,
  TailwindSpaces,
} from "./layout";
import {
  Height,
  MaxHeight,
  MaxWidth,
  MinHeight,
  MinWidth,
  Width,
} from "./sizing";
import { Margin, Padding, SpaceBetween } from "./spacing";
import {
  FontFamily,
  FontSize,
  FontVariantNumeric,
  FontWeight,
  LetterSpacing,
  LineHeight,
  ListStyle,
  ListStylePosition,
  PlaceholderColor,
  PlaceholderOpacity,
  TextAlign,
  TextColor,
  TextOpacity,
  TextOverflow,
  VerticalAlign,
  Whitespace,
  Wordbreak,
} from "./typography";

type Responsive<T> = T | T[] | TailwindResponsive<T>;

interface TailwindResponsive<T> {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}

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

  /** Grid */
  gridTemplateCols?: Responsive<GridTemplateCols>;
  gridTemplateRows?: Responsive<GridTemplateRows>;
  gridCols?: Responsive<GridCols>;
  gridRow?: Responsive<GridRows>;
  gridFlow?: Responsive<GridFlow>;
  autoCols?: Responsive<GridAuto>;
  autoRows?: Responsive<GridAuto>;
  gap?: Responsive<Gap>;
  gapX?: Responsive<Gap>;
  gapY?: Responsive<Gap>;

  /** Box Alignment */
  justifyContent?: Responsive<JustifyContent>;
  justifyItems?: Responsive<JustifyItems>;
  justifySelf?: Responsive<JustifySelf>;
  alignContent?: Responsive<AlignContent>;
  alignItems?: Responsive<AlignItems>;
  alignSelf?: Responsive<AlignSelf>;
  placeContent?: Responsive<PlaceContent>;
  placeItems?: Responsive<PlaceItems>;
  placeSelf?: Responsive<PlaceSelf>;

  /** Spacing */
  p?: Responsive<Padding>;
  px?: Responsive<Padding>;
  py?: Responsive<Padding>;
  pt?: Responsive<Padding>;
  pb?: Responsive<Padding>;
  pr?: Responsive<Padding>;
  pl?: Responsive<Padding>;
  m?: Responsive<Margin>;
  mx?: Responsive<Margin>;
  my?: Responsive<Margin>;
  mt?: Responsive<Margin>;
  mb?: Responsive<Margin>;
  mr?: Responsive<Margin>;
  ml?: Responsive<Margin>;
  spaceX?: Responsive<SpaceBetween>;
  spaceY?: Responsive<SpaceBetween>;

  /** Sizing */
  w?: Responsive<Width>;
  minW?: Responsive<MinWidth>;
  maxW?: Responsive<MaxWidth>;
  h?: Responsive<Height>;
  minH?: Responsive<MinHeight>;
  maxH?: Responsive<MaxHeight>;

  /** Typography */
  font?: Responsive<FontFamily>;
  fontSize?: Responsive<FontSize>;
  italic?: Responsive<boolean>;
  nonItalic?: Responsive<boolean>;
  antialiased?: Responsive<boolean>;
  subpixelAntialiased?: Responsive<boolean>;
  fontWeight?: Responsive<FontWeight>;
  fontVariantNumeric?: Responsive<FontVariantNumeric>;
  tracking?: Responsive<LetterSpacing>;
  leading?: Responsive<LineHeight>;
  listStyle?: Responsive<ListStyle>;
  listPosition?: Responsive<ListStylePosition>;
  placeholderColor?: Responsive<PlaceholderColor>;
  placeholderOpacity?: Responsive<PlaceholderOpacity>;
  textAlign?: Responsive<TextAlign>;
  textColor?: Responsive<TextColor>;
  textOpacity?: Responsive<TextOpacity>;
  textOverflow?: Responsive<TextOverflow>;
  underline?: Responsive<boolean>;
  lineThrough?: Responsive<boolean>;
  noUnderline?: Responsive<boolean>;
  uppercase?: Responsive<boolean>;
  lowercase?: Responsive<boolean>;
  capitalize?: Responsive<boolean>;
  normalCase?: Responsive<boolean>;
  truncate?: Responsive<boolean>;
  align?: Responsive<VerticalAlign>;
  whitespace?: Responsive<Whitespace>;
  break?: Responsive<Wordbreak>;

  borderColor?: Responsive<TailwindColors>;
  fillCurrent?: Responsive<boolean>;
}
