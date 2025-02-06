import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type Table1Type = {
  className?: string;
};

const Table1: FunctionComponent<Table1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[634px] relative h-[507.5px] overflow-hidden shrink-0 text-left text-sm text-muted-foreground font-inter ${className}`}
    >
      <div className="absolute top-[487.5px] left-[224.2px] text-sm-6 leading-[20px] flex items-center w-[185.8px] h-5">
        A list of your recent invoices.
      </div>
      <div className="absolute top-[calc(50%_-_253.75px)] left-[0px] border-border border-b-[1px] border-solid box-border w-[634px] h-12">
        <div className="absolute top-[calc(50%_-_10.2px)] left-[16px] text-sm-8 leading-[20px] font-medium flex items-center w-[47px] h-5">
          Invoice
        </div>
        <div className="absolute top-[calc(50%_-_10.2px)] left-[116px] leading-[20px] font-medium flex items-center w-[43.6px] h-5">
          Status
        </div>
        <div className="absolute top-[calc(50%_-_10.2px)] left-[212.6px] leading-[20px] font-medium flex items-center w-[99px] h-5">
          Method
        </div>
        <div className="absolute top-[calc(50%_-_10.2px)] left-[364.6px] leading-[20px] font-medium text-right flex items-center w-[253.6px] h-5">
          Amount
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_205.75px)] left-[0px] w-[634px] h-[371px] text-foreground">
        <div className="absolute top-[calc(50%_-_185.5px)] left-[0px] border-border border-b-[1px] border-solid box-border w-[634px] h-[53px] text-sm-9">
          <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-[20px] font-medium flex items-center w-[48.5px] h-5">
            INV001
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[116px] leading-[20px] flex items-center w-[28.8px] h-5">
            Paid
          </div>
          <div className="absolute top-[calc(50%_-_9.5px)] left-[214px] text-sm leading-[20px]">
            Credit Card
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[386.4px] text-sm leading-[20px] text-right flex items-center w-[231.8px] h-5">
            $250.00
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_132.5px)] left-[0px] border-border border-b-[1px] border-solid box-border w-[634px] h-[53px]">
          <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-[20px] font-medium flex items-center w-[51.4px] h-5">
            INV002
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[116px] text-sm-5 leading-[20px] flex items-center w-[52.2px] h-5">
            Pending
          </div>
          <div className="absolute top-[calc(50%_-_9.5px)] left-[214px] leading-[20px]">
            PayPal
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[354.3px] leading-[20px] text-right flex items-center w-[263.9px] h-5">
            $150.00
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_79.5px)] left-[0px] border-border border-b-[1px] border-solid box-border w-[634px] h-[53px]">
          <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-[20px] font-medium flex items-center w-[51.5px] h-5">
            INV003
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[116px] text-sm-6 leading-[20px] flex items-center w-[45.8px] h-5">
            Unpaid
          </div>
          <div className="absolute top-[calc(50%_-_9.5px)] left-[214px] leading-[20px]">
            Bank Transfer
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[400.6px] leading-[20px] text-right flex items-center w-[217.6px] h-5">
            $350.00
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_26.5px)] left-[0px] border-border border-b-[1px] border-solid box-border w-[634px] h-[53px]">
          <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-[20px] font-medium flex items-center w-[51.9px] h-5">
            INV004
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[116px] text-sm-9 leading-[20px] flex items-center w-[28.8px] h-5">
            Paid
          </div>
          <div className="absolute top-[calc(50%_-_9.5px)] left-[214px] leading-[20px]">
            Credit Card
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[382.9px] leading-[20px] text-right flex items-center w-[235.3px] h-5">
            $450.00
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_26.5px)] left-[0px] border-border border-b-[1px] border-solid box-border w-[634px] h-[53px]">
          <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-[20px] font-medium flex items-center w-[51.7px] h-5">
            INV005
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[116px] text-sm-9 leading-[20px] flex items-center w-[28.8px] h-5">
            Paid
          </div>
          <div className="absolute top-[calc(50%_-_9.5px)] left-[214px] leading-[20px]">
            PayPal
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[354px] leading-[20px] text-right flex items-center w-[264.2px] h-5">
            $550.00
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_79.5px)] left-[0px] border-border border-b-[1px] border-solid box-border w-[634px] h-[53px]">
          <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-[20px] font-medium flex items-center w-[51.7px] h-5">
            INV006
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[116px] text-sm-5 leading-[20px] flex items-center w-[52.2px] h-5">
            Pending
          </div>
          <div className="absolute top-[calc(50%_-_9.5px)] left-[214px] leading-[20px]">
            Bank Transfer
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[400.4px] leading-[20px] text-right flex items-center w-[217.8px] h-5">
            $200.00
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_132.5px)] left-[0px] w-[634px] h-[53px]">
          <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-[20px] font-medium flex items-center w-[50.7px] h-5">
            INV007
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[116px] text-sm-6 leading-[20px] flex items-center w-[45.8px] h-5">
            Unpaid
          </div>
          <div className="absolute top-[calc(50%_-_9.5px)] left-[214px] leading-[20px]">
            Credit Card
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[384.1px] leading-[20px] text-right flex items-center w-[234.1px] h-5">
            $300.00
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_+_165.25px)] left-[0px] bg-background border-border border-t-[1px] border-solid box-border w-[634px] h-[52.5px] text-foreground">
        <div className="absolute top-[calc(50%_-_26.25px)] left-[0px] w-[634px] h-[52.5px]">
          <div className="absolute top-[calc(50%_-_9.75px)] left-[16px] leading-[20px] font-medium flex items-center w-[33.6px] h-5">
            Total
          </div>
          <div className="absolute top-[calc(50%_-_9.75px)] left-[547.4px] leading-[20px] font-medium text-right flex items-center w-[70.8px] h-5">
            $2,500.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;
