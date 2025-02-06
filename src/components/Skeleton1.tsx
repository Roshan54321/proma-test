import { FunctionComponent } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";

export type Skeleton1Type = {
  className?: string;
};

const Skeleton1: FunctionComponent<Skeleton1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-12 flex flex-row items-center justify-start ${className}`}
    >
      <div className="w-12 relative rounded-9980xl bg-muted h-12" />
      <div className="flex flex-col items-start justify-start py-0 pl-4 pr-0">
        <div className="flex flex-col items-start justify-start gap-2">
          <TextField
            className="[border:none] bg-[transparent] w-[250px] h-4 relative"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "16px",
                backgroundColor: "#f4f4f5",
                borderRadius: "6px",
              },
              width: "250px",
            }}
          />
          <div className="w-[200px] relative rounded-md bg-muted h-4" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton1;
