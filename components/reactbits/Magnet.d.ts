import type { CSSProperties, ComponentPropsWithoutRef, ReactNode } from "react";

export type MagnetProps = {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  maxOffset?: number;
  exclusive?: boolean;
  axis?: "both" | "x" | "y";
  tilt?: number;
  scale?: number;
  spring?: { stiffness?: number; damping?: number; mass?: number };
  onActiveChange?: (active: boolean) => void;
  wrapperClassName?: string;
  innerClassName?: string;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "style">;

export default function Magnet(props: MagnetProps): React.JSX.Element;
