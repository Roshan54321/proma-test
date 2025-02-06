import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Badge1 from "./Badge1";

export type BadgeType = {
  className?: string;
};

const Badge: FunctionComponent<BadgeType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-[33px] pb-16 box-border gap-3 leading-[normal] tracking-[normal] text-left text-11xl text-foreground font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[36px] font-semibold text-[inherit] inline-block min-w-[93px] mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
          Badge
        </a>
        <button className="cursor-pointer [border:none] py-2 pl-[13px] pr-3 bg-foreground rounded-md flex flex-row items-start justify-start hover:bg-darkslategray">
          <a className="[text-decoration:underline] relative text-sm leading-[24px] font-medium font-inter text-background text-left inline-block min-w-[71px]">
            View docs
          </a>
        </button>
      </div>
      <header className="w-[584px] flex flex-row items-start justify-start relative max-w-full text-left text-xl text-muted-foreground font-inter">
        <div className="h-px w-[729px] absolute !m-[0] top-[88px] right-[-143.5px] border-border border-t-[1px] border-solid box-border" />
        <div className="flex-1 flex flex-col items-start justify-start gap-24 max-w-full mq450:gap-6 mq675:gap-12">
          <h2 className="m-0 self-stretch relative text-inherit leading-[28px] font-normal font-[inherit] inline-block min-h-[56px]">
            <p className="m-0">
              Displays a badge or a component that looks like a badge.
            </p>
          </h2>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[161px] pr-5">
            <div className="flex flex-col items-start justify-start gap-16">
              <Badge1 variant="default" />
              <Badge1 variant="outline" />
              <Badge1 variant="destructive" />
              <Badge1 variant="secondary" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Badge;
