import type { CSSProperties } from "react";

export type WarpTextProps = {
  text?: string;
  color?: string;
  warpStrength?: number;
  warpScale?: number;
  speed?: number;
  pointerInfluence?: number;
  pointerStrength?: number;
  refraction?: number;
  chromatic?: number;
  ripple?: boolean;
  clickRipple?: boolean;
  idleDrift?: number;
  lens?: "bulge" | "pinch" | "swirl";
  intro?: boolean;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  align?: "left" | "center" | "right";
  className?: string;
  style?: CSSProperties;
};

export default function WarpText(props: WarpTextProps): React.JSX.Element;
