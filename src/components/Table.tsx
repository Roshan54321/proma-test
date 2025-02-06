import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Table1 from "./Table1";

export type TableType = {
  className?: string;
};

const Table: FunctionComponent<TableType> = ({ className = "" }) => {
  return (
    <div
      className={`bg-background max-w-full flex flex-col items-center justify-start pt-8 px-8 pb-16 box-border gap-16 text-left text-11xl text-foreground font-inter ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-8">
        <div className="flex flex-row items-start justify-start gap-[45px]">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="relative tracking-[-0.01em] leading-[36px] font-semibold">
              Table
            </div>
            <div className="w-[584px] relative text-xl leading-[28px] text-muted-foreground inline-block">
              <p className="m-0">A responsive table component.</p>
            </div>
          </div>
          <div className="w-24 rounded-md bg-foreground flex flex-row items-center justify-center py-2 px-4 box-border text-sm text-background">
            <a
              className="relative [text-decoration:underline] leading-[24px] font-medium text-[inherit]"
              href="https://ui.shadcn.com/docs/components/table"
              target="_blank"
            >
              View docs
            </a>
          </div>
        </div>
        <div className="w-[729px] relative border-border border-t-[1px] border-solid box-border h-px" />
      </div>
      <Table1 />
    </div>
  );
};

export default Table;
