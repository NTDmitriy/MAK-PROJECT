import { TextField, TextFieldProps, styled } from "@mui/material";

const StyledInput = styled((props: TextFieldProps) => (
  <TextField variant="outlined" {...props} />
))(({}) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "rgba(0, 0, 0, 0.2)",
      boxShadow: " 0 1px 6px rgba(32, 33, 36, .28)",
    },
  },

  " & .MuiInputBase-root": {
    borderRadius: "0",

    "& fieldset": {
      transition:
        "border .4s ease-in-out, background-color .4s ease-in-out, border-color .4s ease-in-out, box-shadow .4s ease-in-out",
    },

    "&:hover.Mui-error fieldset": {
      borderColor: "#d32f2f",
      boxShadow: " 0 1px 6px rgba(245, 27, 27, 0.28)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 0, 0, 0.2)",
    },

    "&.Mui-focused.Mui-error fieldset": {
      borderColor: "#d32f2f",
      boxShadow: " 0 1px 6px rgba(245, 27, 27, 0.28)",
    },
  },

  "& .MuiFormLabel-root": {
    color: "#161616",
  },
  "& label.Mui-focused": {
    color: "#161616",
  },
}));

const PrimaryInput = (props: TextFieldProps) => {
  return <StyledInput {...props}  />;
};

export default PrimaryInput;
