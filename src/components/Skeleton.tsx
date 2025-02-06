import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import FrameComponent from "./FrameComponent";
import Skeleton1 from "./Skeleton1";

export type SkeletonType = {
  className?: string;
};

const Skeleton: FunctionComponent<SkeletonType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-8 pb-16 box-border gap-[63px] leading-[normal] tracking-[normal] mq450:gap-[31px] ${className}`}
    >
      <FrameComponent />
      <div className="self-stretch flex flex-row items-start justify-center">
        <Skeleton1 />
      </div>
    </div>
  );
};

export default Skeleton;
