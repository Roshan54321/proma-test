import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type NavigationMenu1Type = {
  className?: string;
};

const NavigationMenu1: FunctionComponent<NavigationMenu1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[426.6px] h-10 flex flex-row items-center justify-center relative text-center text-sm text-foreground font-inter ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-1 z-[0]">
        <div className="w-[149.9px] relative rounded-md bg-background h-10">
          <div className="absolute top-[9.5px] left-[16px] leading-[20px] font-medium flex items-center justify-center w-[102.3px] h-5">
            Getting started
          </div>
          <div className="absolute top-[15px] left-[117.9px] w-4 h-3 flex flex-col items-start justify-start py-0 pl-1 pr-0 box-border">
            <div className="w-3 h-3 overflow-hidden shrink-0 flex flex-col items-center justify-center">
              <img
                className="w-3 flex-1 relative max-h-full"
                alt=""
                src="/frame.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[133.7px] relative rounded-md bg-background h-10">
          <div className="absolute top-[9.5px] left-[16px] leading-[20px] font-medium flex items-center justify-center w-[86px] h-5">
            Components
          </div>
          <img
            className="absolute top-[calc(50%_-_5px)] left-[calc(50%_+_38.85px)] w-3 h-3 object-contain"
            alt=""
            src="/svg.svg"
          />
        </div>
        <div className="rounded-md bg-background flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] text-left">
          <div className="relative leading-[20px] font-medium">
            Documentation
          </div>
        </div>
      </div>
      <div className="w-[600px] !m-[0] absolute top-[46px] left-[calc(50%_-_213.3px)] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-md bg-background border-border border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start flex-wrap content-start p-4 gap-3 z-[1] text-left">
        <div className="w-[278px] h-[80.5px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-md flex flex-col items-start justify-start p-3 gap-1">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[14px] font-medium">
                Alert Dialog
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[19.3px]">
                <p className="m-0">A modal dialog that interrupts the</p>
                <p className="m-0">user with important content and…</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[278px] h-[80.5px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-md flex flex-col items-start justify-start p-3 gap-1">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[14px] font-medium">
                Hover Card
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[19.3px]">
                <p className="m-0">For sighted users to preview content</p>
                <p className="m-0">available behind a link.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[278px] h-[80.5px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-md flex flex-col items-start justify-start p-3 gap-1">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[14px] font-medium">
                Progress
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[19.3px]">
                <p className="m-0">Displays an indicator showing the</p>
                <p className="m-0">completion progress of a task,…</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[278px] h-[80.5px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-md flex flex-col items-start justify-start p-3 gap-1">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[14px] font-medium">
                Scroll-area
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[19.3px]">
                <p className="m-0">Visually or semantically separates</p>
                <p className="m-0">content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[278px] h-[80.5px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-md flex flex-col items-start justify-start p-3 gap-1">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[14px] font-medium">
                Tabs
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[19.3px]">
                <p className="m-0">A set of layered sections of content—</p>
                <p className="m-0">known as tab panels—that are…</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[278px] h-[80.5px] flex flex-col items-start justify-start">
          <div className="self-stretch rounded-md flex flex-col items-start justify-start p-3 gap-1">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[14px] font-medium">
                Tooltip
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[19.3px]">
                <p className="m-0">A popup that displays information</p>
                <p className="m-0">related to an element when the…</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu1;