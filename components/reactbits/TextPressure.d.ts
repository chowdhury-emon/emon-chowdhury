import type { CSSProperties } from "react";

export type TextPressureProps = {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  radius?: number;
  smoothing?: number;
  idle?: "none" | "wave" | "pulse";
  idleSpeed?: number;
  clickRipple?: boolean;
  textColor?: string;
  pressureColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  minFontSize?: number;
  style?: CSSProperties;
};

export default function TextPressure(
  props: TextPressureProps,
): React.JSX.Element;
