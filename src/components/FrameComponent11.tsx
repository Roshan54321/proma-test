import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[45px] max-w-full shrink-0 text-left text-11xl text-foreground font-inter mq750:gap-[22px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[380px] max-w-full mq675:min-w-full">
        <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[36px] font-semibold text-[inherit] inline-block min-w-[80px] mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
          Table
        </a>
        <h3 className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-[inherit] text-muted-foreground inline-block min-h-[56px] mq450:text-base mq450:leading-[22px]">
          <p className="m-0">A responsive table component.</p>
        </h3>
      </div>
      <button className="cursor-pointer [border:none] py-2 px-3 bg-foreground rounded-md flex flex-row items-center justify-center hover:bg-darkslategray">
        <a className="[text-decoration:underline] relative text-sm leading-[24px] font-medium font-inter text-background text-left inline-block min-w-[71px]">
          View docs
        </a>
      </button>
    </div>
  );
};

export default FrameComponent1;