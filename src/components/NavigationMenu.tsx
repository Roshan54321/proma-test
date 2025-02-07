import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import FrameComponent1 from "./FrameComponent11";
import NavigationMenu1 from "./NavigationMenu1";

export type NavigationMenuType = {
  className?: string;
};

const NavigationMenu: FunctionComponent<NavigationMenuType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-8 pb-[357px] box-border gap-16 leading-[normal] tracking-[normal] mq450:gap-8 ${className}`}
    >
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-8 max-w-full mq750:gap-4">
        <FrameComponent1 />
        <div className="self-stretch h-px relative border-border border-t-[1px] border-solid box-border" />
      </section>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px">
        <NavigationMenu1 />
      </div>
    </div>
  );
};

export default NavigationMenu;