import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type Calendar1Type = {
  className?: string;
};

const Calendar1: FunctionComponent<Calendar1Type> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-md border-border border-[1px] border-solid box-border h-[308px] flex flex-col items-start justify-start p-[13px] text-left text-sm text-foreground font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="w-[252px] relative h-6">
            <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_37.6px)] flex flex-col items-start justify-start">
              <div className="relative leading-[20px]">July 2024</div>
            </div>
            <div className="absolute top-[calc(50%_+_2px)] left-[calc(50%_+_33.6px)] w-px h-px">
              <div className="absolute top-[-14px] left-[-155.6px] rounded-md border-border border-[1px] border-solid box-border w-7 h-7 flex flex-row items-center justify-center p-1.5 opacity-[0.5]">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <div className="absolute top-[-14px] right-[-87.4px] rounded-md border-border border-[1px] border-solid box-border w-7 h-7 flex flex-row items-center justify-center p-1.5 opacity-[0.5]">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-center text-smi-8 text-muted-foreground">
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="self-stretch w-9 rounded-md flex flex-col items-center justify-center pt-[0.9px] px-[10.2px] pb-[1.1px] box-border">
                  <div className="relative leading-[19.2px]">Su</div>
                </div>
                <div className="self-stretch w-9 rounded-md flex flex-col items-center justify-center pt-[0.9px] px-[8.8px] pb-[1.1px] box-border text-smi-5">
                  <div className="relative leading-[19.2px]">Mo</div>
                </div>
                <div className="self-stretch w-9 rounded-md flex flex-col items-center justify-center pt-[0.9px] px-[10.9px] pb-[1.1px] box-border">
                  <div className="relative leading-[19.2px]">Tu</div>
                </div>
                <div className="self-stretch w-9 rounded-md flex flex-col items-center justify-center pt-[0.9px] px-[8.9px] pb-[1.1px] box-border">
                  <div className="relative leading-[19.2px]">We</div>
                </div>
                <div className="self-stretch w-9 rounded-md flex flex-col items-center justify-center pt-[0.9px] px-[10.6px] pb-[1.1px] box-border">
                  <div className="relative leading-[19.2px]">Th</div>
                </div>
                <div className="self-stretch w-9 rounded-md flex flex-col items-center justify-center pt-[0.9px] px-[11.8px] pb-[1.1px] box-border">
                  <div className="relative leading-[19.2px]">Fr</div>
                </div>
                <div className="self-stretch w-9 rounded-md flex flex-col items-center justify-center pt-[0.9px] px-[10.2px] pb-[1.1px] box-border">
                  <div className="relative leading-[19.2px]">Sa</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-2 text-sm text-foreground">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="w-9 h-9 flex flex-col items-center justify-start text-muted-foreground">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9px] box-border opacity-[0.5]">
                    <div className="relative leading-[20px]">30</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[15.3px] box-border">
                    <div className="relative leading-[20px]">1</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.7px] box-border">
                    <div className="relative leading-[20px]">2</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.7px] box-border">
                    <div className="relative leading-[20px]">3</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.6px] box-border">
                    <div className="relative leading-[20px]">4</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.6px] box-border">
                    <div className="relative leading-[20px]">5</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.6px] box-border">
                    <div className="relative leading-[20px]">6</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.9px] box-border">
                    <div className="relative leading-[20px]">7</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.8px] box-border">
                    <div className="relative leading-[20px]">8</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.6px] box-border">
                    <div className="relative leading-[20px]">9</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-sm-9">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[10.6px] box-border">
                    <div className="relative leading-[20px]">10</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-sm-4">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[12.6px] box-border">
                    <div className="relative leading-[20px]">11</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-sm-1">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[11px] box-border">
                    <div className="relative leading-[20px]">12</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-sm-1">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[11px] box-border">
                    <div className="relative leading-[20px]">13</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm-2">
                <div className="w-9 h-9 flex flex-col items-center justify-start text-sm-3">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[10.9px] box-border">
                    <div className="relative leading-[20px]">14</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[10.9px] box-border">
                    <div className="relative leading-[20px]">15</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[10.9px] box-border">
                    <div className="relative leading-[20px]">16</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-smi-7">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[11.2px] box-border">
                    <div className="relative leading-[20px]">17</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-smi">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[11.1px] box-border">
                    <div className="relative leading-[20px]">18</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[10.9px] box-border">
                    <div className="relative leading-[20px]">19</div>
                  </div>
                </div>
                <div className="w-9 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none h-9 flex flex-col items-center justify-start text-sm text-primary-foreground">
                  <div className="w-9 rounded-md bg-primary h-9 flex flex-row items-center justify-center py-2 pl-[9px] pr-[9.1px] box-border">
                    <div className="relative leading-[20px]">20</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="w-9 h-9 flex flex-col items-center justify-start text-sm-1">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[11px] box-border">
                    <div className="relative leading-[20px]">21</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.3px] box-border">
                    <div className="relative leading-[20px]">22</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.5px] box-border">
                    <div className="relative leading-[20px]">23</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.4px] box-border">
                    <div className="relative leading-[20px]">24</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.3px] box-border">
                    <div className="relative leading-[20px]">25</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.4px] box-border">
                    <div className="relative leading-[20px]">26</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.7px] box-border">
                    <div className="relative leading-[20px]">27</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.4px] box-border">
                    <div className="relative leading-[20px]">28</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9.3px] box-border">
                    <div className="relative leading-[20px]">29</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[9px] box-border">
                    <div className="relative leading-[20px]">30</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-sm-1">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[11px] box-border">
                    <div className="relative leading-[20px]">31</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-muted-foreground">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[15.3px] box-border opacity-[0.5]">
                    <div className="relative leading-[20px]">1</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-muted-foreground">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.7px] box-border opacity-[0.5]">
                    <div className="relative leading-[20px]">2</div>
                  </div>
                </div>
                <div className="w-9 h-9 flex flex-col items-center justify-start text-muted-foreground">
                  <div className="w-9 rounded-md h-9 flex flex-row items-center justify-center py-2 px-[13.7px] box-border opacity-[0.5]">
                    <div className="relative leading-[20px]">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar1;