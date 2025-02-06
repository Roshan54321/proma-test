import { FunctionComponent } from "react";

export type DropdownMenu1Type = {
  className?: string;
};

const DropdownMenu1: FunctionComponent<DropdownMenu1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[430px] w-full relative shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.1)] rounded-md bg-background border-border border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-[5px] text-left text-sm-6 text-foreground font-inter ${className}`}
    >
      <div className="w-[214px] h-[420px] flex flex-row items-start justify-start relative">
        <div className="h-px w-[222px] absolute !m-[0] top-[36px] left-[calc(50%_-_111px)] bg-border z-[0]" />
        <div className="h-px w-[222px] absolute !m-[0] top-[173px] left-[calc(50%_-_111px)] bg-border z-[1]" />
        <div className="h-px w-[222px] absolute !m-[0] bottom-[141px] left-[calc(50%_-_111px)] bg-border z-[2]" />
        <div className="h-px w-[222px] absolute !m-[0] bottom-[36px] left-[calc(50%_-_111px)] bg-border z-[3]" />
        <div className="h-[420px] w-[214px] flex flex-col items-start justify-start gap-[9px] z-[4]">
          <div className="w-[214px] h-8 flex flex-row items-start justify-start py-1.5 px-2 box-border text-sm-9">
            <a className="[text-decoration:none] h-5 w-[82px] relative leading-[20px] font-semibold text-[inherit] flex items-center shrink-0">
              My Account
            </a>
          </div>
          <div className="w-[214px] h-32 flex flex-col items-start justify-start text-sm">
            <div className="w-[214px] h-8 rounded flex flex-row items-center justify-between py-1.5 px-2 box-border">
              <div className="h-4 w-6 flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
                <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                  <img className="w-4 h-4 relative" loading="lazy" alt="" />
                </div>
              </div>
              <div className="h-5 w-[43px] flex flex-col items-start justify-start">
                <div className="w-11 h-5 relative leading-[20px] flex items-center shrink-0">
                  Profile
                </div>
              </div>
              <div className="h-4 w-[131px] flex flex-col items-end justify-start py-0 pl-[100px] pr-0 box-border min-w-[30.66px] text-[10.7px] text-secondary-foreground">
                <div className="w-[31px] h-4 flex flex-col items-start justify-start opacity-[0.6]">
                  <div className="w-8 h-4 relative tracking-[1.2px] leading-[16px] flex items-center shrink-0">
                    ⇧⌘P
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[214px] h-8 rounded flex flex-row items-center justify-between py-1.5 px-2 box-border">
              <div className="h-4 w-6 flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
                <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                  <img className="w-4 h-4 relative" loading="lazy" alt="" />
                </div>
              </div>
              <div className="h-5 w-10 flex flex-col items-start justify-start">
                <a className="[text-decoration:none] w-[41px] h-5 relative leading-[20px] text-[inherit] flex items-center shrink-0">
                  Billing
                </a>
              </div>
              <div className="h-4 w-[134px] flex flex-col items-end justify-start py-0 pl-[113px] pr-0 box-border min-w-[20.23px] text-[11.6px] text-secondary-foreground">
                <div className="w-[21px] h-4 flex flex-col items-start justify-start opacity-[0.6]">
                  <div className="w-[22px] h-4 relative tracking-[1.2px] leading-[16px] flex items-center shrink-0">
                    ⌘B
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[214px] h-8 rounded flex flex-row items-center justify-between py-1.5 px-2 box-border text-sm-6">
              <div className="h-4 w-6 flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
                <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                  <img className="w-4 h-4 relative" loading="lazy" alt="" />
                </div>
              </div>
              <div className="h-5 w-[53px] flex flex-col items-start justify-start">
                <a className="[text-decoration:none] w-[54px] h-5 relative leading-[20px] text-[inherit] flex items-center shrink-0">
                  Settings
                </a>
              </div>
              <div className="h-4 w-[121px] flex flex-col items-end justify-start py-0 pl-[101px] pr-0 box-border min-w-[19.86px] text-xs-4 text-secondary-foreground">
                <div className="w-5 h-4 flex flex-col items-start justify-start opacity-[0.6]">
                  <div className="w-[21px] h-4 relative tracking-[1.2px] leading-[16px] flex items-center shrink-0">
                    ⌘S
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[214px] h-8 rounded flex flex-row items-center justify-between py-1.5 px-2 box-border text-sm-6">
              <div className="h-4 w-6 flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
                <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                  <img className="w-4 h-4 relative" loading="lazy" alt="" />
                </div>
              </div>
              <div className="h-5 w-[126px] flex flex-col items-start justify-start">
                <div className="w-[127px] h-5 relative leading-[20px] flex items-center shrink-0">
                  Keyboard shortcuts
                </div>
              </div>
              <div className="h-4 w-12 flex flex-col items-end justify-start py-0 pl-[27px] pr-0 box-border min-w-[19.91px] text-xs-4 text-secondary-foreground">
                <div className="w-[21px] h-4 flex flex-col items-start justify-start opacity-[0.6]">
                  <div className="w-[22px] h-4 relative tracking-[1.2px] leading-[16px] flex items-center shrink-0">
                    ⌘K
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[214px] h-24 flex flex-col items-start justify-start">
            <div className="w-[214px] h-8 rounded flex flex-row items-start justify-start py-1.5 px-2 box-border z-[2] text-sm-7">
              <div className="h-[18px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-6 h-4 flex flex-row items-start justify-start">
                  <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                    <img
                      className="w-4 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-5 w-9 flex flex-row items-start justify-start">
                <div className="h-5 w-[37px] relative leading-[20px] flex items-center shrink-0">
                  Team
                </div>
              </div>
            </div>
            <div className="w-[214px] h-8 rounded flex flex-row items-start justify-start py-1.5 px-2 box-border z-[1]">
              <div className="h-[18px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-6 h-4 flex flex-row items-start justify-start">
                  <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                    <img
                      className="w-4 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-5 w-[74px] flex flex-row items-start justify-start">
                <div className="h-5 w-[75px] relative leading-[20px] flex items-center shrink-0">
                  Invite users
                </div>
              </div>
              <div className="h-[18px] w-[100px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[100px] h-4 flex flex-row items-start justify-end min-w-[16px]">
                  <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-end justify-center">
                    <img
                      className="w-4 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[214px] h-8 rounded flex flex-row items-center justify-between py-1.5 px-2 box-border">
              <div className="h-4 w-6 flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
                <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                  <img className="w-4 h-4 relative" loading="lazy" alt="" />
                </div>
              </div>
              <div className="h-5 w-[68px] flex flex-col items-start justify-start">
                <div className="w-[69px] h-5 relative leading-[20px] flex items-center shrink-0">
                  New Team
                </div>
              </div>
              <div className="h-4 w-[106px] flex flex-col items-end justify-start py-0 pl-[78px] pr-0 box-border min-w-[27.05px] text-[11.1px] text-secondary-foreground">
                <div className="w-7 h-4 flex flex-col items-start justify-start opacity-[0.6]">
                  <div className="w-[29px] h-4 relative tracking-[1.2px] leading-[16px] flex items-center shrink-0">
                    ⌘+T
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[214px] h-24 flex flex-col items-start justify-start text-[13.2px]">
            <div className="w-[214px] h-8 rounded flex flex-row items-start justify-start py-1.5 px-2 box-border">
              <div className="h-[18px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-6 h-4 flex flex-row items-start justify-start">
                  <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                    <img
                      className="w-4 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-5 w-[45px] flex flex-row items-start justify-start">
                <div className="h-5 w-[46px] relative leading-[20px] flex items-center shrink-0">
                  GitHub
                </div>
              </div>
            </div>
            <div className="w-[214px] h-8 rounded flex flex-row items-start justify-start py-1.5 px-2 box-border text-sm-8">
              <div className="h-[18px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-6 h-4 flex flex-row items-start justify-start">
                  <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                    <img
                      className="w-4 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-5 w-[53px] flex flex-row items-start justify-start">
                <a className="[text-decoration:none] h-5 w-[54px] relative leading-[20px] text-[inherit] flex items-center shrink-0">
                  Support
                </a>
              </div>
            </div>
            <div className="w-[214px] h-8 rounded flex flex-row items-start justify-start py-1.5 px-2 box-border opacity-[0.5] text-sm text-muted-foreground">
              <div className="h-[18px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-6 h-4 flex flex-row items-start justify-start">
                  <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                    <img
                      className="w-4 flex-1 relative max-h-full"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-5 w-[23px] flex flex-row items-start justify-start">
                <div className="h-5 w-6 relative leading-[20px] flex items-center shrink-0">
                  API
                </div>
              </div>
            </div>
          </div>
          <div className="w-[214px] h-8 rounded flex flex-row items-center justify-between py-1.5 px-2 box-border">
            <div className="h-4 w-6 flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
              <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <img className="w-4 h-4 relative" loading="lazy" alt="" />
              </div>
            </div>
            <div className="h-5 w-[49px] flex flex-col items-start justify-start">
              <div className="w-[50px] h-5 relative leading-[20px] flex items-center shrink-0">
                Log out
              </div>
            </div>
            <div className="h-4 w-[125px] flex flex-col items-end justify-start py-0 pl-[93px] pr-0 box-border min-w-[31.75px] text-[10.5px] text-secondary-foreground">
              <div className="w-8 h-4 flex flex-col items-start justify-start opacity-[0.6]">
                <div className="w-[33px] h-4 relative tracking-[1.2px] leading-[16px] flex items-center shrink-0">
                  ⇧⌘Q
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu1;