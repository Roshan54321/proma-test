import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import NavigationMenu1 from "./NavigationMenu1";

export type NavigationMenuType = {
  className?: string;
};

const NavigationMenu: FunctionComponent<NavigationMenuType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-8 pb-[357px] box-border gap-8 leading-[normal] tracking-[normal] mq450:gap-4 ${className}`}
    >
      <FrameComponent1 />
      <section className="self-stretch flex flex-col items-start justify-start gap-16 mq450:gap-4 mq750:gap-8">
        <div className="self-stretch h-px relative border-border border-t-[1px] border-solid box-border" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
          <NavigationMenu1 />
        </div>
      </section>
    </div>
  );
};

export default NavigationMenu;
