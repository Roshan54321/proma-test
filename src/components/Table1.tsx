import { FunctionComponent } from "react";
import { Box } from "@mui/material";

export type Table1Type = {
  className?: string;
};

const Table1: FunctionComponent<Table1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[507.5px] w-[634px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-left text-sm text-muted-foreground font-inter ${className}`}
    >
      <div className="w-[634px] h-[419px] flex flex-col items-start justify-start z-[2]">
        <div className="w-[634px] h-12 border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[13.8px] px-4 pb-[14.2px] gap-[253px]">
          <div className="h-5 w-[295.6px] flex flex-row items-start justify-start gap-[52.5px]">
            <div className="h-5 w-[49px] relative text-sm-8 leading-[20px] font-medium flex items-center shrink-0">
              Invoice
            </div>
            <div className="h-5 w-[44.6px] relative leading-[20px] font-medium flex items-center shrink-0">
              Status
            </div>
            <a className="[text-decoration:none] h-5 w-[100px] relative leading-[20px] font-medium text-[inherit] flex items-center shrink-0">
              Method
            </a>
          </div>
          <a className="[text-decoration:none] h-5 w-[54px] relative leading-[20px] font-medium text-[inherit] text-right flex items-center shrink-0">
            Amount
          </a>
        </div>
        <div className="w-[634px] h-[371px] flex flex-col items-start justify-start text-foreground">
          <div className="w-[634px] h-[53px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[16.5px] px-4 pb-4 gap-[270.4px] text-sm-9">
            <div className="h-[20.5px] w-[275px] flex flex-row items-start justify-start gap-[51.5px]">
              <div className="h-5 w-[49.5px] relative leading-[20px] font-medium flex items-center shrink-0">
                INV001
              </div>
              <div className="h-5 w-[46.5px] flex flex-col items-start justify-start py-0 pl-0 pr-[17.5px] box-border">
                <div className="w-[30px] h-5 relative leading-[20px] flex items-center shrink-0">
                  Paid
                </div>
              </div>
              <div className="h-5 w-[78px] relative text-sm leading-[20px] flex items-center shrink-0">
                Credit Card
              </div>
            </div>
            <div className="h-5 w-[57px] relative text-sm leading-[20px] text-right flex items-center shrink-0">
              $250.00
            </div>
          </div>
          <div className="w-[634px] h-[53px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[16.5px] px-4 pb-4 gap-[304.3px]">
            <div className="h-[20.5px] w-[243px] flex flex-row items-start justify-start gap-[46.8px]">
              <div className="h-5 w-[52.4px] relative leading-[20px] font-medium flex items-center shrink-0">
                INV002
              </div>
              <div className="h-5 w-[54px] relative text-sm-5 leading-[20px] flex items-center shrink-0">
                Pending
              </div>
              <a className="[text-decoration:none] h-5 w-[46px] relative leading-[20px] text-[inherit] flex items-center shrink-0">
                PayPal
              </a>
            </div>
            <div className="h-5 w-[55px] relative leading-[20px] text-right flex items-center shrink-0">
              $150.00
            </div>
          </div>
          <div className="w-[634px] h-[53px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[16.5px] px-4 pb-4 gap-[254.6px]">
            <div className="h-[20.5px] w-[291px] flex flex-row items-start justify-start gap-[50.3px]">
              <div className="h-5 w-[52.5px] relative leading-[20px] font-medium flex items-center shrink-0">
                INV003
              </div>
              <div className="h-5 w-[47px] relative text-sm-6 leading-[20px] flex items-center shrink-0">
                Unpaid
              </div>
              <div className="h-5 w-[94px] relative leading-[20px] flex items-center shrink-0">
                Bank Transfer
              </div>
            </div>
            <div className="h-5 w-[57px] relative leading-[20px] text-right flex items-center shrink-0">
              $350.00
            </div>
          </div>
          <div className="w-[634px] h-[53px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[16.5px] pb-4 pl-4 pr-[15.1px] gap-[270.9px]">
            <div className="h-[20.5px] w-[275px] flex flex-row items-start justify-start gap-12">
              <div className="h-5 w-[53px] relative leading-[20px] font-medium flex items-center shrink-0">
                INV004
              </div>
              <div className="h-5 w-[50px] flex flex-col items-start justify-start py-0 pl-0 pr-[21px] box-border text-sm-9">
                <div className="w-[30px] h-5 relative leading-[20px] flex items-center shrink-0">
                  Paid
                </div>
              </div>
              <div className="h-5 w-[78px] relative leading-[20px] flex items-center shrink-0">
                Credit Card
              </div>
            </div>
            <div className="h-5 w-[58px] relative leading-[20px] text-right flex items-center shrink-0">
              $450.00
            </div>
          </div>
          <div className="w-[634px] h-[53px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[16.5px] px-4 pb-4 gap-[303px]">
            <div className="h-[20.5px] w-[243px] flex flex-row items-start justify-start gap-[48.3px]">
              <div className="h-5 w-[52.7px] relative leading-[20px] font-medium flex items-center shrink-0">
                INV005
              </div>
              <div className="h-5 w-[49.7px] flex flex-col items-start justify-start py-0 pl-0 pr-[20.7px] box-border text-sm-9">
                <div className="w-[30px] h-5 relative leading-[20px] flex items-center shrink-0">
                  Paid
                </div>
              </div>
              <div className="h-5 w-[46px] relative leading-[20px] flex items-center shrink-0">
                PayPal
              </div>
            </div>
            <div className="h-5 w-[57px] relative leading-[20px] text-right flex items-center shrink-0">
              $550.00
            </div>
          </div>
          <div className="w-[634px] h-[53px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[16.5px] pb-4 pl-4 pr-[15.6px] gap-[254.4px]">
            <div className="h-[20.5px] w-[291px] flex flex-row items-start justify-start gap-[46.5px]">
              <div className="h-5 w-[53px] relative leading-[20px] font-medium flex items-center shrink-0">
                INV006
              </div>
              <div className="h-5 w-[54px] relative text-sm-5 leading-[20px] flex items-center shrink-0">
                Pending
              </div>
              <div className="h-5 w-[94px] relative leading-[20px] flex items-center shrink-0">
                Bank Transfer
              </div>
            </div>
            <div className="h-5 w-[58px] relative leading-[20px] text-right flex items-center shrink-0">
              $200.00
            </div>
          </div>
          <div className="w-[634px] h-[53px] flex flex-row items-start justify-start pt-[16.5px] pb-4 pl-4 pr-[14.9px] box-border gap-[271.1px]">
            <div className="h-[20.5px] w-[275px] flex flex-row items-start justify-start gap-[50.7px]">
              <div className="h-5 w-[51.7px] relative leading-[20px] font-medium flex items-center shrink-0">
                INV007
              </div>
              <div className="h-5 w-[47px] relative text-sm-6 leading-[20px] flex items-center shrink-0">
                Unpaid
              </div>
              <div className="h-5 w-[78px] relative leading-[20px] flex items-center shrink-0">
                Credit Card
              </div>
            </div>
            <div className="h-5 w-[58px] relative leading-[20px] text-right flex items-center shrink-0">
              $300.00
            </div>
          </div>
        </div>
      </div>
      <div className="w-[634px] h-[68.5px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border z-[3] text-foreground">
        <div className="h-[52.5px] w-[634px] bg-background border-border border-t-[1px] border-solid box-border flex flex-row items-start justify-start">
          <div className="h-[52.5px] w-[634px] flex flex-row items-start justify-start pt-[16.5px] pb-4 pl-4 pr-[15.8px] box-border gap-[497.8px]">
            <div className="h-5 w-[34.6px] relative leading-[20px] font-medium flex items-center shrink-0">
              Total
            </div>
            <div className="h-5 w-[71.8px] relative leading-[20px] font-medium text-right flex items-center shrink-0">
              $2,500.00
            </div>
          </div>
        </div>
      </div>
      <div className="w-[411.2px] h-5 flex flex-row items-start justify-start py-0 pl-[224.2px] pr-0 box-border z-[1] text-sm-6">
        <div className="h-5 w-[188px] relative leading-[20px] flex items-center shrink-0">
          A list of your recent invoices.
        </div>
      </div>
    </div>
  );
};

export default Table1;