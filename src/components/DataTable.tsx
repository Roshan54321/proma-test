import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import DataTable1 from "./DataTable1";

export type DataTableType = {
  className?: string;
};

const DataTable: FunctionComponent<DataTableType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-8 pb-16 box-border gap-8 leading-[normal] tracking-[normal] mq450:gap-4 ${className}`}
    >
      <FrameComponent1 />
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