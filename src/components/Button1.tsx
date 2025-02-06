import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./Button1.module.css";

export type Button1Type = {
  className?: string;

  /** Variant props */
  size?: "default" | "sm" | "lg";
  variant?:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary";

  /** Style props */
  buttonWidth?: CSSProperties["width"];
  buttonHeight?: CSSProperties["height"];
};

const Button1: FunctionComponent<Button1Type> = ({
  className = "",
  size = "default",
  variant = "default",
  buttonWidth,
  buttonHeight,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      height: buttonHeight,
    };
  }, [buttonWidth, buttonHeight]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-size={size}
      data-variant={variant}
      style={buttonStyle}
    >
      <div className={styles.button}>Button</div>
    </div>
  );
};

export default Button1;
