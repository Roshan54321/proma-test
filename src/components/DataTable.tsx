import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import DataTable1 from "./DataTable1";

export type DataTableType = {
  className?: string;
};

const DataTable: FunctionComponent<DataTableType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-8 pb-16 box-border gap-8 leading-[normal] tracking-[normal] mq450:gap-4 ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-11xl text-foreground font-inter">
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[45px] max-w-full mq750:gap-[22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[380px] max-w-full mq675:min-w-full">
            <a className="[text-decoration:none] relative tracking-[-0.01em] leading-[36px] font-semibold text-[inherit] mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
              Data Table
            </a>
            <h3 className="m-0 self-stretch relative text-xl leading-[28px] font-normal font-[inherit] text-muted-foreground inline-block min-h-[56px] mq450:text-base mq450:leading-[22px]">
              <p className="m-0">
                Powerful table and datagrids built using TanStack Table.
              </p>
            </h3>
          </div>
          <button className="cursor-pointer [border:none] py-2 pl-[13px] pr-3 bg-foreground rounded-md flex flex-row items-start justify-start hover:bg-darkslategray">
            <a className="[text-decoration:underline] relative text-sm leading-[24px] font-medium font-inter text-background text-left inline-block min-w-[71px]">
              View docs
            </a>
          </button>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
        <div className="self-stretch h-px relative border-border border-t-[1px] border-solid box-border" />
        <div className="flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
          <DataTable1 />
        </div>
      </section>
    </div>
  );
};

export default DataTable;