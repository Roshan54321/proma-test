import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type Badge1Type = {
  className?: string;

  /** Variant props */
  variant?: "default" | "outline" | "destructive" | "secondary";
};

const Badge1: FunctionComponent<Badge1Type> = ({
  className = "",
  variant = "default",
}) => {
  return (
    <div
      className={`w-[59px] rounded-9980xl bg-primary h-[22px] flex flex-row items-center justify-start py-[3px] px-[11px] box-border text-left text-xs text-background font-inter data-[variant='outline']:bg-[unset] data-[variant='outline']:border-border data-[variant='outline']:border-[1px] data-[variant='outline']:border-solid data-[variant='destructive']:bg-destructive data-[variant='secondary']:bg-muted [&_.badge2]:data-[variant='outline']:[text-decoration:unset] [&_.badge2]:data-[variant='outline']:text-foreground [&_.badge2]:data-[variant='destructive']:[text-decoration:unset] [&_.badge2]:data-[variant='secondary']:[text-decoration:unset] [&_.badge2]:data-[variant='secondary']:text-foreground ${className}`}
      data-variant={variant}
    >
      <a className="badge2 [text-decoration:none] relative leading-[16px] font-semibold text-[inherit]">
        Badge
      </a>
    </div>
  );
};

export default Badge1;
