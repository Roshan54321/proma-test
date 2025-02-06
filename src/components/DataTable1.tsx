import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Box,
} from "@mui/material";

export type DataTable1Type = {
  className?: string;
};

const DataTable1: FunctionComponent<DataTable1Type> = ({ className = "" }) => {
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
      className={`h-[482.5px] w-[634px] flex flex-col items-start justify-start gap-4 text-left text-sm text-[transparent] font-inter ${className}`}
    >
      <div
        className="w-[634px] h-[430.5px] flex flex-col items-start justify-start gap-4"
        data-acc-group
      >
        <div
          className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
          data-acc-item
          data-acc-header
          data-acc-original
          onClick={onAccordionHeaderClick}
        >
          <TextField
            className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
            placeholder="Filter emails..."
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#e4e4e7" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#fff",
                borderRadius: "6px",
                fontSize: "13.6px",
              },
              "& .MuiInputBase-input": { color: "#71717a" },
              width: "384px",
            }}
          />
          <FormControl
            className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
            variant="standard"
            sx={{
              borderColor: "#e4e4e7",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "6px",
              width: "18.359621451104097%",
              height: "40px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "40px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "40px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "40px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "40px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#09090b",
                fontSize: 13.9,
                fontWeight: "Medium",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "17px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/svg.svg"
                  style={{ marginRight: "17px" }}
                />
              )}
            >
              <MenuItem>Columns</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="w-[634px] hidden flex-col" data-acc-item data-acc-open>
          <div
            className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] cursor-pointer"
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <TextField
              className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
              placeholder="Filter emails..."
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#e4e4e7" },
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  fontSize: "13.6px",
                },
                "& .MuiInputBase-input": { color: "#71717a" },
                width: "384px",
              }}
            />
            <FormControl
              className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
              variant="standard"
              sx={{
                borderColor: "#e4e4e7",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "6px",
                width: "18.359621451104097%",
                height: "40px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#09090b",
                  fontSize: 13.9,
                  fontWeight: "Medium",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "17px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/svg.svg"
                    style={{ marginRight: "17px" }}
                  />
                )}
              >
                <MenuItem>Columns</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="relative hidden" />
          </div>
          <div
            className="w-[634px] grid flex-row items-start justify-start gap-[133.6px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
            data-acc-content
          >
            <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </div>
        </div>
        <div className="w-[634px] h-[374.5px] rounded-md border-border border-[1px] border-solid box-border flex flex-row items-start justify-start p-px text-muted-foreground">
          <div className="h-[372.5px] w-[632px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div
              className="w-[632px] h-12 border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[3.8px] px-4 pb-[4.2px] gap-[91.4px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="h-[30px] w-[85.3px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                <div className="w-[85.3px] h-5 flex flex-row items-start justify-start gap-[25.7px]">
                  <input
                    className="m-0 h-4 w-4 relative rounded border-foreground border-[1px] border-solid box-border"
                    type="checkbox"
                  />
                  <div className="h-5 w-[44.6px] relative leading-[20px] font-medium flex items-center shrink-0">
                    Status
                  </div>
                </div>
              </div>
              <div className="h-10 w-[196.6px] flex flex-col items-start justify-start py-0 pl-0 pr-[103.9px] box-border text-center">
                <div className="w-[92.7px] h-10 rounded-md flex flex-row items-start justify-start py-2.5 px-4 box-border gap-[7.8px]">
                  <div className="h-5 w-[37.9px] relative leading-[20px] font-medium flex items-center justify-center shrink-0">
                    Email
                  </div>
                  <div className="h-[18px] w-4 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-4 h-4 relative"
                      loading="lazy"
                      alt=""
                      src="/svg-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[30px] w-[52px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-right text-sm-8">
                <a className="[text-decoration:none] w-[53px] h-5 relative leading-[20px] font-medium text-[inherit] flex items-center shrink-0">
                  Amount
                </a>
              </div>
            </div>
            <div
              className="w-[634px] hidden flex-col text-[transparent]"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <TextField
                  className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
                  placeholder="Filter emails..."
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#e4e4e7" },
                    "& .MuiInputBase-root": {
                      height: "40px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      fontSize: "13.6px",
                    },
                    "& .MuiInputBase-input": { color: "#71717a" },
                    width: "384px",
                  }}
                />
                <FormControl
                  className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
                  variant="standard"
                  sx={{
                    borderColor: "#e4e4e7",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    width: "18.359621451104097%",
                    height: "40px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#09090b",
                      fontSize: 13.9,
                      fontWeight: "Medium",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "17px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/svg.svg"
                        style={{ marginRight: "17px" }}
                      />
                    )}
                  >
                    <MenuItem>Columns</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="relative hidden">Status</div>
              </div>
              <div
                className="w-[634px] grid flex-row items-start justify-start gap-[133.6px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div className="w-[632px] h-[324.5px] flex flex-col items-start justify-start text-sm-9 text-foreground">
              <div
                className="w-[632px] h-[65px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-[16.5px] px-4 gap-[79px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-[26px] w-[97.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                  <div className="w-[97.7px] h-5 flex flex-row items-start justify-start gap-[25.7px]">
                    <input
                      className="m-0 h-4 w-4 relative rounded border-foreground border-[1px] border-solid box-border"
                      type="checkbox"
                    />
                    <div className="h-5 w-[57px] relative leading-[20px] capitalize flex items-center shrink-0">
                      success
                    </div>
                  </div>
                </div>
                <div className="h-8 w-[403.8px] flex flex-row items-start justify-start gap-[159.4px] text-sm-7">
                  <div className="h-[26px] w-[126px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <div className="w-[127px] h-5 relative leading-[20px] lowercase flex items-center shrink-0">
                      ken99@yahoo.com
                    </div>
                  </div>
                  <div className="h-8 w-[118.4px] flex flex-row items-start justify-start gap-[31.8px] text-right text-sm-9">
                    <div className="h-[26px] w-[54.6px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                      <div className="w-[55.6px] h-5 relative leading-[20px] font-medium flex items-center shrink-0">
                        $316.00
                      </div>
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-md"
                      loading="lazy"
                      alt=""
                      src="/data--button-menu.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-[634px] hidden flex-col text-[transparent]"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <TextField
                    className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
                    placeholder="Filter emails..."
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#e4e4e7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        borderRadius: "6px",
                        fontSize: "13.6px",
                      },
                      "& .MuiInputBase-input": { color: "#71717a" },
                      width: "384px",
                    }}
                  />
                  <FormControl
                    className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
                    variant="standard"
                    sx={{
                      borderColor: "#e4e4e7",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      width: "18.359621451104097%",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#09090b",
                        fontSize: 13.9,
                        fontWeight: "Medium",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "17px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/svg.svg"
                          style={{ marginRight: "17px" }}
                        />
                      )}
                    >
                      <MenuItem>Columns</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="relative hidden">success</div>
                </div>
                <div
                  className="w-[634px] grid flex-row items-start justify-start gap-[133.6px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[632px] h-[65px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-[16.5px] px-4 gap-[79px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-[26px] w-[97.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                  <div className="w-[97.7px] h-5 flex flex-row items-start justify-start gap-[25.7px]">
                    <input
                      className="m-0 h-4 w-4 relative rounded border-foreground border-[1px] border-solid box-border"
                      type="checkbox"
                    />
                    <div className="h-5 w-[57px] relative leading-[20px] capitalize flex items-center shrink-0">
                      success
                    </div>
                  </div>
                </div>
                <div className="h-8 w-[403.8px] flex flex-row items-start justify-start gap-[159.4px]">
                  <div className="h-[26px] w-[123px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <div className="w-[124px] h-5 relative leading-[20px] lowercase flex items-center shrink-0">
                      Abe45@gmail.com
                    </div>
                  </div>
                  <div className="h-8 w-[121.4px] flex flex-row items-start justify-start gap-[31.4px] text-right text-sm">
                    <div className="h-[26px] w-[58px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                      <div className="w-[59px] h-5 relative leading-[20px] font-medium flex items-center shrink-0">
                        $242.00
                      </div>
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-md"
                      loading="lazy"
                      alt=""
                      src="/data--button-menu.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-[634px] hidden flex-col text-[transparent]"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <TextField
                    className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
                    placeholder="Filter emails..."
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#e4e4e7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        borderRadius: "6px",
                        fontSize: "13.6px",
                      },
                      "& .MuiInputBase-input": { color: "#71717a" },
                      width: "384px",
                    }}
                  />
                  <FormControl
                    className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
                    variant="standard"
                    sx={{
                      borderColor: "#e4e4e7",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      width: "18.359621451104097%",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#09090b",
                        fontSize: 13.9,
                        fontWeight: "Medium",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "17px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/svg.svg"
                          style={{ marginRight: "17px" }}
                        />
                      )}
                    >
                      <MenuItem>Columns</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="relative hidden">success</div>
                </div>
                <div
                  className="w-[634px] grid flex-row items-start justify-start gap-[133.6px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[632px] h-[65px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-[16.5px] px-4 gap-[63px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-sm-7"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-[26px] w-[113.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                  <div className="w-[113.7px] h-5 flex flex-row items-start justify-start gap-[25.7px]">
                    <input
                      className="m-0 h-4 w-4 relative rounded border-foreground border-[1px] border-solid box-border"
                      type="checkbox"
                    />
                    <div className="h-5 w-[73px] relative leading-[20px] capitalize flex items-center shrink-0">
                      processing
                    </div>
                  </div>
                </div>
                <div className="h-8 w-[403.8px] flex flex-row items-start justify-start gap-[118px] text-sm-8">
                  <div className="h-[26px] w-[165px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <div className="w-[166px] h-5 relative leading-[20px] lowercase flex items-center shrink-0">
                      Monserrat44@gmail.com
                    </div>
                  </div>
                  <div className="h-8 w-[120.8px] flex flex-row items-start justify-start gap-[31.8px] text-right text-sm">
                    <div className="h-[26px] w-[57px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                      <div className="w-[58px] h-5 relative leading-[20px] font-medium flex items-center shrink-0">
                        $837.00
                      </div>
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-md"
                      loading="lazy"
                      alt=""
                      src="/data--button-menu.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-[634px] hidden flex-col text-[transparent]"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <TextField
                    className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
                    placeholder="Filter emails..."
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#e4e4e7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        borderRadius: "6px",
                        fontSize: "13.6px",
                      },
                      "& .MuiInputBase-input": { color: "#71717a" },
                      width: "384px",
                    }}
                  />
                  <FormControl
                    className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
                    variant="standard"
                    sx={{
                      borderColor: "#e4e4e7",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      width: "18.359621451104097%",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#09090b",
                        fontSize: 13.9,
                        fontWeight: "Medium",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "17px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/svg.svg"
                          style={{ marginRight: "17px" }}
                        />
                      )}
                    >
                      <MenuItem>Columns</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="relative hidden">processing</div>
                </div>
                <div
                  className="w-[634px] grid flex-row items-start justify-start gap-[133.6px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[632px] h-[65px] border-border border-b-[1px] border-solid box-border flex flex-row items-start justify-start py-[16.5px] px-4 gap-[79px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-[26px] w-[97.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                  <div className="w-[97.7px] h-5 flex flex-row items-start justify-start gap-[25.7px]">
                    <input
                      className="m-0 h-4 w-4 relative rounded border-foreground border-[1px] border-solid box-border"
                      type="checkbox"
                    />
                    <div className="h-5 w-[57px] relative leading-[20px] capitalize flex items-center shrink-0">
                      success
                    </div>
                  </div>
                </div>
                <div className="h-8 w-[403.8px] flex flex-row items-start justify-start gap-[153.7px] text-sm">
                  <div className="h-[26px] w-[129px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <div className="w-[130px] h-5 relative leading-[20px] lowercase flex items-center shrink-0">
                      Silas22@gmail.com
                    </div>
                  </div>
                  <div className="h-8 w-[121.1px] flex flex-row items-start justify-start gap-[31.8px] text-right">
                    <div className="h-[26px] w-[57.3px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                      <div className="w-[58.3px] h-5 relative leading-[20px] font-medium flex items-center shrink-0">
                        $874.00
                      </div>
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-md shrink-0"
                      loading="lazy"
                      alt=""
                      src="/data--button-menu.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-[634px] hidden flex-col text-[transparent]"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <TextField
                    className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
                    placeholder="Filter emails..."
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#e4e4e7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        borderRadius: "6px",
                        fontSize: "13.6px",
                      },
                      "& .MuiInputBase-input": { color: "#71717a" },
                      width: "384px",
                    }}
                  />
                  <FormControl
                    className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
                    variant="standard"
                    sx={{
                      borderColor: "#e4e4e7",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      width: "18.359621451104097%",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#09090b",
                        fontSize: 13.9,
                        fontWeight: "Medium",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "17px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/svg.svg"
                          style={{ marginRight: "17px" }}
                        />
                      )}
                    >
                      <MenuItem>Columns</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="relative hidden">success</div>
                </div>
                <div
                  className="w-[634px] grid flex-row items-start justify-start gap-[133.6px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <div
                className="w-[632px] h-[64.5px] flex flex-row items-start justify-start pt-[16.5px] px-4 pb-4 box-border gap-[95px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-sm"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={onAccordionHeaderClick}
              >
                <div className="h-[26px] w-[81.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                  <div className="w-[81.7px] h-5 flex flex-row items-start justify-start gap-[25.7px]">
                    <input
                      className="m-0 h-4 w-4 relative rounded border-foreground border-[1px] border-solid box-border"
                      type="checkbox"
                    />
                    <div className="h-5 w-[41px] relative leading-[20px] capitalize flex items-center shrink-0">
                      failed
                    </div>
                  </div>
                </div>
                <div className="h-8 w-[403.8px] flex flex-row items-start justify-start gap-[136px] text-sm-9">
                  <div className="h-[26px] w-[150px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <div className="w-[151px] h-5 relative leading-[20px] lowercase flex items-center shrink-0">
                      carmella@hotmail.com
                    </div>
                  </div>
                  <div className="h-8 w-[117.8px] flex flex-row items-start justify-start gap-[31.8px] text-right text-sm">
                    <div className="h-[26px] w-[54px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                      <div className="w-[55px] h-5 relative leading-[20px] font-medium flex items-center shrink-0">
                        $721.00
                      </div>
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-md"
                      loading="lazy"
                      alt=""
                      src="/data--button-menu.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-[634px] hidden flex-col text-[transparent]"
                data-acc-item
                data-acc-open
              >
                <div
                  className="w-[634px] h-10 flex flex-row items-start justify-start gap-[133.6px] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <TextField
                    className="[border:none] bg-[transparent] h-10 w-96 font-inter text-sm-6 text-muted-foreground"
                    placeholder="Filter emails..."
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#e4e4e7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        borderRadius: "6px",
                        fontSize: "13.6px",
                      },
                      "& .MuiInputBase-input": { color: "#71717a" },
                      width: "384px",
                    }}
                  />
                  <FormControl
                    className="h-10 w-[116.4px] font-inter font-medium text-sm-9 text-foreground"
                    variant="standard"
                    sx={{
                      borderColor: "#e4e4e7",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                      width: "18.359621451104097%",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#09090b",
                        fontSize: 13.9,
                        fontWeight: "Medium",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "17px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/svg.svg"
                          style={{ marginRight: "17px" }}
                        />
                      )}
                    >
                      <MenuItem>Columns</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="relative hidden">failed</div>
                </div>
                <div
                  className="w-[634px] grid flex-row items-start justify-start gap-[133.6px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[634px] h-9 flex flex-row items-start justify-start gap-[340.5px] text-sm-6 text-muted-foreground">
        <div className="h-7 w-[145px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
          <div className="w-[146px] h-5 relative leading-[20px] flex items-center shrink-0">
            0 of 5 row(s) selected.
          </div>
        </div>
        <div className="h-9 w-[148.5px] flex flex-row items-start justify-start gap-[7.9px]">
          <button className="cursor-pointer border-border border-[1px] border-solid py-2 pl-[13px] pr-[12.2px] bg-background h-9 w-[83.2px] rounded-md box-border flex flex-row items-start justify-start opacity-[0.5]">
            <div className="h-5 w-[59px] relative text-sm-9 leading-[20px] font-medium font-inter text-foreground text-center flex items-center justify-center shrink-0">
              Previous
            </div>
          </button>
          <button className="cursor-pointer border-border border-[1px] border-solid py-2 pl-[13px] pr-[12.4px] bg-background h-9 w-[57.4px] rounded-md box-border flex flex-row items-start justify-start opacity-[0.5]">
            <div className="h-5 w-[33px] relative text-sm leading-[20px] font-medium font-inter text-foreground text-center flex items-center justify-center shrink-0">
              Next
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable1;
