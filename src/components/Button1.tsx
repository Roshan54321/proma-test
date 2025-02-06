import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";

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
      className={`w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border text-center text-sm text-primary-foreground font-inter data-[size='default']:data-[variant='destructive']:bg-destructive data-[size='sm']:data-[variant='destructive']:bg-destructive data-[size='lg']:data-[variant='destructive']:bg-destructive data-[size='default']:data-[variant='ghost']:bg-[unset] data-[size='sm']:data-[variant='ghost']:bg-[unset] data-[size='lg']:data-[variant='ghost']:bg-[unset] data-[size='default']:data-[variant='link']:bg-[unset] data-[size='sm']:data-[variant='link']:bg-[unset] data-[size='lg']:data-[variant='link']:bg-[unset] data-[size='default']:data-[variant='outline']:bg-[unset] data-[size='default']:data-[variant='outline']:border-border data-[size='default']:data-[variant='outline']:border-[1px] data-[size='default']:data-[variant='outline']:border-solid data-[size='sm']:data-[variant='secondary']:bg-muted data-[size='lg']:data-[variant='secondary']:bg-muted data-[size='sm']:data-[variant='outline']:bg-[unset] data-[size='sm']:data-[variant='outline']:border-border data-[size='sm']:data-[variant='outline']:border-[1px] data-[size='sm']:data-[variant='outline']:border-solid data-[size='lg']:data-[variant='outline']:bg-[unset] data-[size='lg']:data-[variant='outline']:border-border data-[size='lg']:data-[variant='outline']:border-[1px] data-[size='lg']:data-[variant='outline']:border-solid data-[size='default']:data-[variant='secondary']:bg-muted [&_.button17]:data-[size='default']:data-[variant='ghost']:text-foreground [&_.button17]:data-[size='sm']:data-[variant='ghost']:text-foreground [&_.button17]:data-[size='lg']:data-[variant='ghost']:text-foreground [&_.button17]:data-[size='default']:data-[variant='link']:text-foreground [&_.button17]:data-[size='sm']:data-[variant='link']:text-foreground [&_.button17]:data-[size='lg']:data-[variant='link']:text-foreground [&_.button17]:data-[size='default']:data-[variant='outline']:text-foreground [&_.button17]:data-[size='sm']:data-[variant='secondary']:text-foreground [&_.button17]:data-[size='lg']:data-[variant='secondary']:text-foreground [&_.button17]:data-[size='sm']:data-[variant='outline']:text-foreground [&_.button17]:data-[size='lg']:data-[variant='outline']:text-foreground [&_.button17]:data-[size='default']:data-[variant='secondary']:text-foreground ${className}`}
      data-size={size}
      data-variant={variant}
      style={buttonStyle}
    >
      <div className="button17 relative leading-[20px] font-medium">Button</div>
    </div>
  );
};

export default Button1;