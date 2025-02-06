import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-8 max-w-full text-left text-11xl text-foreground font-inter mq750:gap-4 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[45px] max-w-full mq750:gap-[22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[380px] max-w-full mq675:min-w-full">
            <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[36px] font-semibold text-[inherit] mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
              Dropdown Menu
            </a>
            <h3 className="m-0 relative text-xl leading-[28px] font-normal font-[inherit] text-muted-foreground inline-block min-h-[84px] mq450:text-base mq450:leading-[22px]">
              <p className="m-0">
                Displays a menu to the user — such as a set of actions or
                functions — triggered by a button.
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
