import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import Table1 from "./Table1";

export type TableType = {
  className?: string;
};

const Table: FunctionComponent<TableType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[792px] bg-background max-w-full flex flex-col items-start justify-start pt-8 px-8 pb-16 box-border gap-16 leading-[normal] tracking-[normal] mq450:gap-8 ${className}`}
    >
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-8 max-w-full mq750:gap-4">
        <FrameComponent1 />
        <div className="self-stretch h-px relative border-border border-t-[1px] border-solid box-border" />
      </section>
      <section className="flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
        <Table1 />
      </section>
    </div>
  );
};

export default Table;