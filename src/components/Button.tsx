import { FunctionComponent, useCallback } from "react";
import { Typography, Box } from "@mui/material";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-8 pb-16 box-border gap-[63px] leading-[normal] tracking-[normal] mq450:gap-[31px] ${className}`}
    >
      <header className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-8 max-w-full text-left text-11xl text-foreground font-inter mq725:gap-4">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-row items-start justify-start gap-[45px] max-w-full mq725:gap-[22px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full">
              <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[36px] font-semibold text-[inherit] inline-block min-w-[97px]">
                Button
              </a>
              <h3 className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-[inherit] text-muted-foreground">
                Displays a button or a component that looks like a button.
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
      </header>
      <section className="self-stretch flex flex-row items-start justify-center max-w-full text-center text-sm text-primary-foreground font-inter">
        <div
          className="self-stretch w-[366px] flex flex-col items-start justify-start gap-5 max-w-full"
          data-acc-group
        >
          <div
            className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="w-[69px] rounded-md bg-primary h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="w-[111px] rounded-md bg-primary h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
              <div className="relative leading-[20px] font-medium">Button</div>
            </div>
            <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-10 rounded-md bg-primary h-10 flex flex-row items-center justify-center p-3 box-border">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg1.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[357px] hidden flex-col"
            data-acc-item
            data-acc-open
          >
            <div
              className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 cursor-pointer"
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-[69px] rounded-md bg-primary h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="w-[111px] rounded-md bg-primary h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
              <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-10 rounded-md bg-primary h-10 flex flex-row items-center justify-center p-3 box-border">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
            </div>
            <div
              className="w-[357px] grid flex-row items-start justify-start gap-5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[77px] rounded-md bg-destructive h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="w-[69px] rounded-md bg-destructive h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="w-[111px] rounded-md bg-destructive h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
              <div className="relative leading-[20px] font-medium">Button</div>
            </div>
            <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-10 rounded-md bg-destructive h-10 flex flex-row items-center justify-center p-3 box-border">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg1.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[357px] hidden flex-col"
            data-acc-item
            data-acc-open
          >
            <div
              className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 cursor-pointer"
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-[69px] rounded-md bg-primary h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="w-[111px] rounded-md bg-primary h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
              <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-10 rounded-md bg-primary h-10 flex flex-row items-center justify-center p-3 box-border">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
            </div>
            <div
              className="w-[357px] grid flex-row items-start justify-start gap-5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-foreground"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[77px] rounded-md h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="w-[69px] rounded-md h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="w-[111px] rounded-md h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
              <div className="relative leading-[20px] font-medium">Button</div>
            </div>
            <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-10 rounded-md h-10 flex flex-row items-center justify-center p-3 box-border">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[357px] hidden flex-col"
            data-acc-item
            data-acc-open
          >
            <div
              className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 cursor-pointer"
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-[69px] rounded-md bg-primary h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="w-[111px] rounded-md bg-primary h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
              <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-10 rounded-md bg-primary h-10 flex flex-row items-center justify-center p-3 box-border">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
            </div>
            <div
              className="w-[357px] grid flex-row items-start justify-start gap-5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-foreground"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[77px] rounded-md h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="w-[69px] rounded-md h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="w-[111px] rounded-md h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
              <div className="relative leading-[20px] font-medium">Button</div>
            </div>
            <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-10 rounded-md h-10 flex flex-row items-center justify-center p-3 box-border">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[357px] hidden flex-col"
            data-acc-item
            data-acc-open
          >
            <div
              className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 cursor-pointer"
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-[69px] rounded-md bg-primary h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="w-[111px] rounded-md bg-primary h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
              <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-10 rounded-md bg-primary h-10 flex flex-row items-center justify-center p-3 box-border">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
            </div>
            <div
              className="w-[357px] grid flex-row items-start justify-start gap-5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className="w-[361px] h-11 flex flex-row items-start justify-start gap-5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-foreground"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className="h-[42px] w-[79px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[79px] rounded-md border-border border-[1px] border-solid box-border h-10 flex flex-row items-center justify-center pt-[9.5px] px-[17px] pb-[10.5px]">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="h-10 w-[71px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="w-[71px] rounded-md border-border border-[1px] border-solid box-border h-9 flex flex-row items-center justify-center pt-[7.5px] px-[13px] pb-[8.5px]">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="w-[111px] rounded-md border-border border-[1px] border-solid box-border h-11 flex flex-row items-center justify-center pt-[11.5px] px-[33px] pb-[12.5px]">
              <div className="relative leading-[20px] font-medium">Button</div>
            </div>
            <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-10 rounded-md border-border border-[1px] border-solid box-border h-10 flex flex-row items-center justify-center p-3">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[357px] hidden flex-col"
            data-acc-item
            data-acc-open
          >
            <div
              className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 cursor-pointer"
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-[69px] rounded-md bg-primary h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="w-[111px] rounded-md bg-primary h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
              <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-10 rounded-md bg-primary h-10 flex flex-row items-center justify-center p-3 box-border">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
            </div>
            <div
              className="w-[357px] grid flex-row items-start justify-start gap-5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-foreground"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-[77px] rounded-md bg-muted h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="w-[69px] rounded-md bg-muted h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
            </div>
            <div className="w-[111px] rounded-md bg-muted h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
              <div className="relative leading-[20px] font-medium">Button</div>
            </div>
            <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="w-10 rounded-md bg-muted h-10 flex flex-row items-center justify-center p-3 box-border">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-2.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[357px] hidden flex-col"
            data-acc-item
            data-acc-open
          >
            <div
              className="w-[357px] h-11 flex flex-row items-start justify-start gap-5 cursor-pointer"
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="h-[42px] w-[77px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[77px] rounded-md bg-primary h-10 flex flex-row items-center justify-center pt-[9.5px] px-4 pb-[10.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="h-10 w-[69px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <div className="w-[69px] rounded-md bg-primary h-9 flex flex-row items-center justify-center pt-[7.5px] px-3 pb-[8.5px] box-border">
                  <div className="relative leading-[20px] font-medium">
                    Button
                  </div>
                </div>
              </div>
              <div className="w-[111px] rounded-md bg-primary h-11 flex flex-row items-center justify-center pt-[11.5px] px-8 pb-[12.5px] box-border">
                <div className="relative leading-[20px] font-medium">
                  Button
                </div>
              </div>
              <div className="h-[42px] w-10 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-10 rounded-md bg-primary h-10 flex flex-row items-center justify-center p-3 box-border">
                  <img
                    className="h-4 w-4 relative"
                    loading="lazy"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
            </div>
            <div
              className="w-[357px] grid flex-row items-start justify-start gap-5 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Button;