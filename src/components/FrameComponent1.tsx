import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  frameSectionAlignSelf?: CSSProperties["alignSelf"];
  skeletonDisplay?: CSSProperties["display"];
  skeletonMinWidth?: CSSProperties["minWidth"];
  useToShowContainerAlignSelf?: CSSProperties["alignSelf"];
  useToShowContainerMinHeight?: CSSProperties["minHeight"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameSectionAlignSelf,
  skeletonDisplay,
  skeletonMinWidth,
  useToShowContainerAlignSelf,
  useToShowContainerMinHeight,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionAlignSelf]);

  const skeletonStyle: CSSProperties = useMemo(() => {
    return {
      display: skeletonDisplay,
      minWidth: skeletonMinWidth,
    };
  }, [skeletonDisplay, skeletonMinWidth]);

  const useToShowContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: useToShowContainerAlignSelf,
      minHeight: useToShowContainerMinHeight,
    };
  }, [useToShowContainerAlignSelf, useToShowContainerMinHeight]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-8 max-w-full text-left text-11xl text-foreground font-inter mq750:gap-4 ${className}`}
      style={frameSectionStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[45px] max-w-full mq750:gap-[22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[380px] max-w-full mq675:min-w-full">
            <a
              className="[text-decoration:none] relative tracking-[-0.01em] leading-[36px] font-semibold text-[inherit] inline-block min-w-[127px] mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]"
              style={skeletonStyle}
            >
              Skeleton
            </a>
            <h3
              className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-[inherit] text-muted-foreground inline-block min-h-[56px] mq450:text-base mq450:leading-[22px]"
              style={useToShowContainerStyle}
            >
              <p className="m-0">
                Use to show a placeholder while content is loading.
              </p>
            </h3>
          </div>
          <button className="cursor-pointer [border:none] py-2 pl-[13px] pr-3 bg-foreground rounded-md flex flex-row items-start justify-start hover:bg-darkslategray">
            <a className="[text-decoration:underline] relative text-sm leading-[24px] font-medium font-inter text-background text-left inline-block min-w-[71px]">
              View docs
            </a>
          </button>
        </div>
      </div>
      <div className="self-stretch h-px relative border-border border-t-[1px] border-solid box-border" />
    </section>
  );
};

export default FrameComponent;